# Dashboard Template

Este é um projeto de template de dashboard criado com as seguintes tecnologias: **Next.js**, **Prisma**, **Tailwind** e **shadcn**. Este template é projetado para ser usado como base para outros projetos de dashboard, oferecendo um ponto de partida robusto e personalizável.

### Funcionalidades

* Autenticação de Login com Magic Link: Sistema de autenticação seguro e fácil de usar.

* Todo Genérico: Uma lista de tarefas para gerenciar e rastrear atividades.

* Configuração de Tema: Oferece opções para personalização de temas

* Configuração de Perfil: Permite que os usuários atualizem suas informações de perfil.

### Tecnologias Utilizadas

1. Next.js: Framework React para desenvolvimento web.

2. Prisma: ORM para trabalhar com bancos de dados de forma eficiente.

3. Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.

4. shadcn: Biblioteca de componentes para construção de interfaces de usuário.

### Autenticação com Magic Link
A autenticação é realizada via Magic Link, proporcionando uma experiência de login segura e simplificada. Para configurar o Magic Link, você precisará de uma chave secreta, que deve ser definida no arquivo .env.

### Configuração do Perfil
Os usuários podem acessar e modificar suas informações de perfil através da rota `app/settings/profile`. As alterações são refletidas imediatamente no banco de dados utilizando o Prisma.

### Configuração de Tema
O projeto inclui uma funcionalidade de configuração de tema, permitindo aos usuários personalizar a aparência do dashboard conforme suas preferências. Esta configuração é gerenciada através da rota `app/settings/theme`.

### Todo Genérico
Uma implementação básica de um sistema de tarefas está incluída, permitindo aos usuários criar, visualizar, editar e excluir tarefas. Esta funcionalidade pode ser estendida conforme necessário.


_Nota: Este README é um ponto de partida e deve ser ajustado conforme as necessidades específicas do seu projeto. Certifique-se de atualizar as informações de acordo com as especificidades do seu desenvolvimento._