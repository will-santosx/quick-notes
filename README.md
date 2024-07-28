---

# Quick Notes Documentation

## Overview

Quick Notes é um aplicativo web para criar e gerenciar anotações rápidas e breves. Foi desenvolvido usando Next.js e a biblioteca Tiptap para edição de rich text. A aplicação oferece funcionalidades de criação, visualização e remoção de anotações.

## Features

- **Criação de anotações:** Permite ao usuário criar novas anotações.
- **Visualização de anotações:** Exibe as anotações existentes com formatação rich text.
- **Remoção de anotações:** Permite ao usuário remover anotações existentes.

## Instalação

### Requisitos

Certifique-se de ter o Node.js instalado na sua máquina. Recomenda-se usar a versão LTS.

### Steps

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/will-santosx/quick-notes
   cd quick-notes
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute a aplicação:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Arquivos Importantes

- **src/app/components/ui/**: Contém componentes de interface do usuário reutilizáveis, como `AppLoading` e `Button`.
- **src/app/page.tsx**: Componente principal da página de anotações, responsável por exibir, carregar e remover anotações.
- **src/utils/axiosService.ts**: Configuração do Axios para facilitar as requisições HTTP.
- **src/anotacao/nova/page.tsx**: Componente principal da página de novas anotações, responsável por criar anotações.

## Usage

### Visualizando uma anotação

Na página de visualização de anotações (`page.tsx`), o conteúdo da anotação é carregado a partir do servidor e exibido usando o editor Tiptap. A data de criação é formatada usando `date-fns`.

### Removendo uma anotação

A função `removeNote` faz uma requisição DELETE para o servidor, removendo a anotação especificada. Após a remoção, o usuário é redirecionado para a página inicial.

## Contributing

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commite (`git commit -m 'Adicionei nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## License

Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Esta documentação serve como um guia básico para desenvolvedores que desejam entender, instalar e contribuir para o projeto Quick Notes. Sinta-se à vontade para expandi-la conforme o projeto cresce e novas funcionalidades são adicionadas.
