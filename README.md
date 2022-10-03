# Boas vindas ao projeto do Trybe Futebol Clube

  Projeto feito durante o curso de desenvolvimento web na trybe.

  O `TFC` é um site informativo sobre partidas e classificações de futebol.

  Nesse projeto, você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento deve respeitar regras de negócio providas no projeto e sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

  Para adicionar uma partida é necessário pessoa usuária e senha, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas `teams` e `matches` para fazermos as atualizações das partidas.

  O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.


# Orientações

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
    </summary>

  1. Clone o repositório
    * `git clone https://github.com/mabiiak/tfc.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd tfc`

  2. Instale as dependências
    * `npm install`

  3. Crie uma branch a partir da branch `master`
    * Verifique que você está na branch `master`
      * Exemplo: `git branch`
    * Se não estiver, mude para a branch `master`
      * Exemplo: `git checkout master`
    * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
      * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
      * Exemplo: `git checkout -b nome-tfc`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
    * Verifique que as mudanças ainda não estão no _stage_
      * Exemplo: `git status`
    * Adicione o novo arquivo ao _stage_ do Git
        * Exemplo:
          * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
          * `git status`
    * Faça o `commit` inicial
        * Exemplo:
          * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
          * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto
    * Usando o exemplo anterior: `git push -u origin nome-tfc`

  6. Crie um novo `Pull Request` _(PR)_
    * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/tfc/pulls)
    * Clique no botão verde _"New pull request"_
    * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Clique no botão verde _"Create pull request"_
    * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
    * **Não se preocupe em preencher mais nada por enquanto!**
    * Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/tfc/pulls) e confira que o seu _Pull Request_ está criado

</details>

  <details>
  <summary>
    <h3>
      Variáveis de ambiente
    </h3>
    </summary>

  **Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

  **Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

  `sd-016-a-trybe-futebol-clube/app/backend/src/database/config/database.ts`

  ```
  module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: TRYBE_FUTEBOL_CLUBE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  };

  ```

  **(Neste arquivo é obrigatório deixar o nome da database como `"database": 'TRYBE_FUTEBOL_CLUBE'`)**

  **É essencial usar essas 3 variáveis no arquivo acima:**

  #### Variáveis:

  `host: process.env.DB_HOST`;

  `user: process.env.DB_USER`;

  `password: process.env.DB_PASS`.

  **Com essas variáveis iremos conseguir fazer a conexão ao banco do avaliador automático**

  **⚠️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto. ⚠️**

  </details>
  <details>
  <summary>
    <h3>
      Chave JWT e criptografia de senhas:
    </h3>
    </summary>

  ⚠️ A sua chave `JWT` deve ser inserida em `app/backend/jwt.evaluation.key` e deve ser carregada no back-end com o uso da biblioteca `fs`.

  ⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs). Utilize especificamente essa biblioteca, ela pode ser colocada como dependência em `app/backend/package.json`, mas lembre-se de adicioná-la depois em `app/backend/packages.npm` para que o avaliador realize a instalação dela no projeto para avaliação. ⚠️
  </details>

<details>
  <summary><h3> Configuração Docker</h3></summary><

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/) ⚠

  #### Crie os arquivos dockerfile e docker-compose

  - As pastas `frontend/` e `backend/` devem possuir um arquivo dockerfile;
  - A pasta `app/` deve possuir um arquivo docker-compose;
  - Os arquivos dockerfile e docker-compose devem estar configurados corretamente.

    **Observação**
      Em seu projeto vai conter um arquivo docker-compose.example.yml.
      Seu service do back-end no docker-compose deve ter o `depends_on` exatamente igual ao do arquivo docker-compose.example.yml.
      Use o modelo de serviço do banco de dados que está no arquivo `app/docker-compose.example.yml`, que está igual ao formato abaixo:

  > Lembre-se, você pode revisitar os conteúdos sobre Docker:
  > - [Dockerfile](https://app.betrybe.com/course/back-end/docker/manipulacao-e-criacao-de-imagens-no-docker/e92d2393-3508-43ab-8a67-2b2516d25864) (Seção Dockerfile - Comandos Básicos)
  > - [docker-compose](https://app.betrybe.com/course/back-end/docker/orquestrando-containers-com-docker-compose/6e8afaef-566a-47f2-9246-d3700db7a56a) (Seção Compose File - Parte I)

  ``` yml
  version: '3.9'
  services:
    frontend:
      build: ./frontend
      # ...
      depends_on:
        backend:
          condition: service_healthy
      # Os `healthcheck` devem garantir que a aplicação
      # está operacional, antes de liberar o container
      healthcheck:
        test: ["CMD", "lsof", "-t", "-i:3000"]  # Caso utilize outra porta interna para o front, altere ela aqui também
        timeout: 10s
        retries: 5
    backend:
      build: ./backend
      # ...
      depends_on:
        db:
          condition: service_healthy
      environment:
        - PORT=3001
        # Os dados abaixo se referem ao container `db`
        # Dica: Relembre aqui da comunicação interna entre containers
        - DB_USER=root
        - DB_PASS=123456
        - DB_HOST=db
        - DB_NAME=TRYBE_FUTEBOL_CLUBE
        - DB_PORT=3306
      healthcheck:
        test: ["CMD", "lsof", "-t", "-i:3001"] # Caso utilize outra porta interna para o back, altere ela aqui também
        timeout: 10s
        retries: 5
    db:
      image: mysql:8.0.21
      container_name: db
      ports:
        - 3002:3306
      environment:
        - MYSQL_ROOT_PASSWORD=123456
      restart: 'always'
      healthcheck:
        test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost"] # Deve aguardar o banco ficar operacional
        timeout: 10s
        retries: 5
      cap_add:
        - SYS_NICE # Deve omitir alertas menores
  ```

  ⚠️ Só o seu docker-compose não vai ser suficiente para gerar os containers. Também será necessário criar os models e as migrations para que seu projeto seja executável via Docker. **Por isso implemente os 3 primeiros requisitos para começar a testar o projeto usando o Docker e docker-compose.**

  ⚠️ O avaliador utiliza os mesmos valores das variáveis de ambiente contidas no docker-compose, por exemplo `DB_USER`, `DB_PASS`, `DB_HOST` e as portas que os containers devem utilizar. **Por mais que seja possível alterar algumas delas e ajustar os testes para continuarem funcionais, recomendamos fortemente a não alterá-las.**

</details>

  ### Sequelize

  Para o desenvolvimento, o time de produto disponibilizou um *Diagrama de Entidade-Relacionamento (DER)* para construir a modelagem do banco de dados. Com essa imagem você já consegue saber como:
  - Nomear suas tabelas e colunas;
  - Quais são os tipos de suas colunas;
  - Relações entre tabelas.

    ![Exemplo banco de dados](assets/er-diagram.png)

  **Dica:** Também é possível buscar referências nas seeds providas no projeto em `./app/backend/src/database/seeders`

</details>

## Requisitos

### Database

    ✅ 1 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `teams`

    ✅ 2 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `matches`

    ✅ 3 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela `users`

### Login

    ✅ 4 - (`TDD`) Desenvolva testes que cubram no mínimo 5% dos arquivos back-end em `/src` com um mínimo de 7 linhas cobertas

    ✅ 5 - Desenvolva o endpoint `/login` no back-end de maneira ele permita o acesso com dados válidos no front-end

    ✅ 6 - (`TDD`) Desenvolva testes que cubram no mínimo 10% dos arquivos back-end em `/src` com um mínimo de 19 linhas cobertas

    ✅ 7 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email inválido no front-end

    ✅ 8 - (`TDD`) Desenvolva testes que cubram no mínimo 15% dos arquivos back-end em `/src` com um mínimo de 25 linhas cobertas

    ✅ 9 - Desenvolva o endpoint `/login` no back-end de maneira ele não permita o acesso com uma senha inválida no front-end

    ✅ 10 - (`TDD`) Desenvolva testes que cubram no mínimo 20% dos arquivos back-end em `/src` com um mínimo de 35 linhas cobertas

    ✅ 11 - Desenvolva o endpoint `/login` no back-end de maneira ele não permita o acesso sem informar um email no front-end

    ✅ 12 - (`TDD`) Desenvolva testes que cubram no mínimo 30% dos arquivos back-end em `/src` com um mínimo de 45 linhas cobertas

    ✅ 13 - Desenvolva o endpoint `/login` no back-end de maneira ele não permita o acesso sem informar uma senha no front-end

    ✅ 14 - Desenvolva o endpoint `/login/validate` no back-end de maneira ele retorne os dados corretamente no front-end

    ✅ 15 - (`TDD`) Desenvolva testes que cubram no mínimo 45% dos arquivos back-end em `/src` com um mínimo de 70 linhas cobertas

    ✅ 16 - Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente

    ✅ 17 - Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico

    ✅ 18 - (`TDD`) Desenvolva testes que cubram no mínimo 60% dos arquivos back-end em `/src` com um mínimo de 80 linhas cobertas

    ✅ 19 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end.

    ✅ 20 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas em andamento na tela de partidas do front-end

    ✅ 21 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas finalizadas na tela de partidas do front-end

### Adicionar Partidas

    ✅ 22 - (`Bônus`; `TDD`) Desenvolva testes que cubram no mínimo 80% dos arquivo back-end em `/src` com um mínimo de 100 linhas cobertas

    ✅ 23 - Desenvolva a rota `/matches` de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados

    ✅ 24 - Desenvolva a rota `/matches/:id/finish` de modo que seja possível salvar uma partida com o status de inProgress como false no banco de dados

    ✅ 25 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais

    ✅ 26 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com time que não existe na tabela teams

### Editar Partidas

    ✅ 27 - Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento

    ✅ 28 - Desenvolva o endpoint `/matches/:id` de forma que seja possível finalizar partidas em andamento

### Leaderboard Home

    ✅ 29 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar a classificações dos times, quando mandantes, na tela de classificação do frontend com os dados iniciais do banco de dados

    ✅ 30 - Desenvolva o endpoint `/leaderboard/home`, de forma que seja possível filtrar a classificações dos times quando mandantes na tela de classificação do front-end e ao inserir a partida Corinthians 2 X 1 Internacional a tabela será atualizada

### Leaderboard away

    ✅ 31 - Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times  na tela de classificação do front-end, com os dados iniciais do banco de dados

    ✅ 32 - Desenvolva o endpoint `/leaderboard/away` de forma que seja possível filtrar a classificações dos times na tela de classificação do front-end e ao inserir a partida Corinthians 2 X 1 Internacional a tabela seja atualizada

### Leaderboard

    ❌ 33 - Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

    ❌ 34 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e ao inserir a partida Flamengo 3 X 0 Napoli-SC a tabela será atualizada

    ❌ 35 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e ao inserir a partida Minas Brasília 1 X 0 Ferroviária a tabela será atualizada
