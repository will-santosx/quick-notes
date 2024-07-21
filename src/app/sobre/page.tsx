export default function AboutPage() {
  return (
    <div className="lowercase text-[14px] sm:text-[16px] lg:text-[20px] flex flex-col gap-[45px]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          Sobre a Quick Notes
        </h1>
        <p className="text-justify">
          Bem-vindo à Quick Notes, a aplicação de anotações projetada para ser
          simples e intuitiva. Nosso principal objetivo é proporcionar uma
          maneira fácil e rápida para que você possa fazer suas anotações. Com
          um editor de texto simplificado, a Quick Notes facilita a organização
          das suas ideias, permitindo que você se concentre no que realmente
          importa: anotar seus pensamentos.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          Funcionalidade em Primeiro Lugar
        </h1>
        <p className="text-justify">
          A Quick Notes foi criada para ser uma ferramenta prática e eficiente.
          Contamos com um esquema de cores que ajuda você a categorizar e
          organizar suas anotações de maneira clara e visual. O design da
          aplicação é minimalista, focado na funcionalidade e na experiência do
          usuário. Nada de interfaces complicadas ou distrações desnecessárias –
          apenas uma plataforma direta e eficaz para suas anotações.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          Por Que Criamos a Quick Notes
        </h1>
        <p className="text-justify">
          A ideia de desenvolver a Quick Notes nasceu da nossa dificuldade em
          encontrar aplicativos de anotações que fossem realmente rápidos e
          práticos para anotar pensamentos breves e ideias rápidas. Queríamos
          algo que nos permitisse capturar esses momentos de inspiração sem
          complicações, e é exatamente isso que a Quick Notes oferece.
        </p>
      </div>
    </div>
  );
}
