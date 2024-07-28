"use client";
import { CircleUser } from "lucide-react";
import Cookie from "js-cookie";
import { axiosFetch } from "@/utils/axiosService";
import { useEffect, useState } from "react";
import LoadingPage from "../components/ui/AppLoading";
import { parseISO, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { LogoutButton } from "../components/ui/Button";
import { useRouter } from "next/navigation";

interface ProfileData {
  id?: number;
  name?: string;
  email?: string;
  created_at?: string;
}

const convertDateTime = (isoString: string): string => {
  const date = parseISO(isoString);
  return formatDistance(date, new Date(), {
    locale: ptBR,
    addSuffix: true,
  });
};

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  async function getProfileData() {
    const token = Cookie.get("jwt");
    try {
      setLoading(true);
      const response = await axiosFetch.get("api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response) {
        const profile = await response.data;
        if (profile) {
          setProfileData(profile);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <div className="w-full flex flex-col gap-[3.5rem]">
          <div className="flex flex-col justify-center items-center gap-[20px] w-full lowercase">
            <div className="flex justify-between items-center w-full">
              <CircleUser className="w-[50px] h-[50px]" />
              <div className="text-right">
                {profileData && (
                  <h1 className="text-[20px] font-medium">
                    {profileData.name}
                  </h1>
                )}
                {profileData && (
                  <h2 className="text-[15px]">{profileData.email}</h2>
                )}
              </div>
            </div>
            <div className="text-center">
              {profileData && (
                <h3>
                  você é um usuário {convertDateTime(profileData.created_at!)}.
                </h3>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <LogoutButton title="desconectar" type="button" />
          </div>
        </div>
      )}
    </div>
  );
}
