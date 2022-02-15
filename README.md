<h1 align="center">
  <img alt="Ignite NodeJS" src="https://res.cloudinary.com/vilmarbatista/image/upload/v1644929675/Development/SitioDigital/banner_f8uwoh.jpg" />
</h1>

<h3 align="center">
  Api Cielo Ecommerce NodeJS
</h3>

<p align="center">Integração com a API Cielo eCommerce da Cielo - https://developercielo.github.io/manual/cielo-ecommerce.</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vilmarsitiodigital/api-cielo-ecommerce?color=%2307606b">

  <a href="https://www.linkedin.com/in/vilmarbatista/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-vilmar-07606b">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vilmarsitiodigital/api-cielo-ecommerce?color=%2307606b">

  <a href="https://github.com/vilmarsitiodigital/api-cielo-ecommerce/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vilmarsitiodigital/api-cielo-ecommerce?color=%2307606b">
  </a>

  <a href="https://github.com/vilmarsitiodigital/api-cielo-ecommerce/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vilmarsitiodigital/api-cielo-ecommerce?color=%2307606b">
  </a>

  <a href="https://github.com/vilmarsitiodigital/api-cielo-ecommerce/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/vilmarsitiodigital/api-cielo-ecommerce?color=%2307606b">
  </a>
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">Para contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=RestInsomnia%20-%20VilmarBatistaf&uri=https%3A%2F%2Fgithub.com%2Fvilmarsitiodigital%2Fapi-cielo-ecommerce%2Fblob%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## ℹ️ Sobre o projeto

Integração com a API Cielo eCommerce da Cielo, com as funcionalidades e métodos para realizar uma transação. 
Requisição utilizando o método POST para o recurso Payment, conforme o exemplo. Esse exemplo contempla o mínimo de campos necessários a serem enviados para a autorização (https://developercielo.github.io/manual/cielo-ecommerce#transa%C3%A7%C3%A3o-simples):

- Atenção: Não é possivel realizar uma transação com valor (`Amount`) 0.;
- Atenção: Deve-se Utilizar no header da requisição o Content-Type application/json.;

<table>
  <thead>
    <tr>
      <th>Propriedade</th>
      <th>Tipo</th>
      <th>Tamanho</th>
      <th>Obrigatório</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">MerchantId</code></td>
      <td>Guid</td>
      <td>36</td>
      <td>Sim</td>
      <td>Identificador da loja na Cielo.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">MerchantKey</code></td>
      <td>Texto</td>
      <td>40</td>
      <td>Sim</td>
      <td>Chave Publica para Autenticação Dupla na Cielo.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Content-Type</code></td>
      <td>Header</td>
      <td>40</td>
      <td>Sim</td>
      <td>application/json (obrigatório o envio deste).</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">RequestId</code></td>
      <td>Guid</td>
      <td>36</td>
      <td>Não</td>
      <td>Identificador do Request, utilizado quando o lojista usa diferentes servidores para cada GET/POST/PUT.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">MerchantOrderId</code></td>
      <td>Texto</td>
      <td>50</td>
      <td>Sim</td>
      <td>Numero de identificação do Pedido.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Customer.Name</code></td>
      <td>Texto</td>
      <td>255</td>
      <td>Não</td>
      <td>Nome do Comprador.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Payment.Type</code></td>
      <td>Texto</td>
      <td>100</td>
      <td>Sim</td>
      <td>Tipo do Meio de Pagamento.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Payment.Amount</code></td>
      <td>Número</td>
      <td>15</td>
      <td>Sim</td>
      <td>Valor do Pedido (ser enviado em centavos).</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Payment.Installments</code></td>
      <td>Número</td>
      <td>2</td>
      <td>Sim</td>
      <td>Número de Parcelas.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Payment.SoftDescriptor</code></td>
      <td>Texto</td>
      <td>13</td>
      <td>Não</td>
      <td>Texto impresso na fatura bancaria comprador - Exclusivo para VISA/MASTER - não permite caracteres especiais - Ver Anexo</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">Payment.IsCryptocurrencyNegotiation</code></td>
      <td>Booleano</td>
      <td>-</td>
      <td>Não (default false)</td>
      <td>Deve ser enviado com valor “true” caso se trate de uma transação de compra ou venda de Criptomoeda</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.CardNumber</code></td>
      <td>Texto</td>
      <td>19</td>
      <td>Sim</td>
      <td>Número do Cartão do Comprador.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.Holder</code></td>
      <td>Texto</td>
      <td>25</td>
      <td>Não</td>
      <td>Nome do Comprador impresso no cartão.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.ExpirationDate</code></td>
      <td>Texto</td>
      <td>7</td>
      <td>Sim</td>
      <td>Data de validade impresso no cartão.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.SecurityCode</code></td>
      <td>Texto</td>
      <td>4</td>
      <td>Não</td>
      <td>Código de segurança impresso no verso do cartão - Ver Anexo.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.Brand</code></td>
      <td>Texto</td>
      <td>10</td>
      <td>Sim</td>
      <td>Bandeira do cartão (Visa / Master / Amex / Elo / Aura / JCB / Diners / Discover / Hipercard / Hiper).</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.CardOnFile.Usage</code></td>
      <td>Texto</td>
      <td>-</td>
      <td>Não</td>
      <td><strong>First</strong> se o cartão foi armazenado e é seu primeiro uso.<br><strong>Used</strong> se o cartão foi armazenado e ele já foi utilizado anteriormente em outra transação</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">CreditCard.CardOnFile.Reason</code></td>
      <td>Texto</td>
      <td>-</td>
      <td>Condicional</td>
      <td>Indica o propósito de armazenamento de cartões, caso o campo “Usage” for “Used”.<br><strong>Recurring</strong> - Compra recorrente programada (ex. assinaturas)<br><strong>Unscheduled</strong> - Compra recorrente sem agendamento (ex. aplicativos de serviços)<br><strong>Installments</strong> - Parcelamento através da recorrência<br><a href="https://developercielo.github.io/faq/faq-api-3-0#pagamento-com-credenciais-armazenadas">Veja Mais</a></td>
    </tr>
  </tbody>
</table>

## 🚀 Tecnologias

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Axios](https://www.npmjs.com/package/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Começando

Importe o arquivo `Insomnia.json` em sua aplicação Insomnia ou clique em [Run in Insomnia](#insomniaButton) button

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/vilmarsitiodigital/api-cielo-ecommerce.git && cd api-cielo-ecommerce
```

**Siga o passo a passo abaixo**

```bash
# Instale as dependências
$ yarn

# Para finalizar, execute sua aplicação
$ yarn dev

# Muito bem, o projeto foi iniciado!
```

## 🤔 Para contribuir

**Faça um fork deste repositório**

```bash
# Fork usando a linha de comando oficial do GitHub
# Se você não tiver a CLI do GitHub, use o site para fazer isso.

$ gh repo fork vilmarsitiodigital/api-cielo-ecommerce
```

**Siga o passo a passo abaixo**

```bash
# Clone seu fork
$ git clone your-fork-url && cd api-cielo-ecommerce

# Crie um branch com seu recurso
$ git checkout -b my-feature

# Faça o commit com suas alterações
$ git commit -m 'Feature: My new feature'

# Envie o código para seu remote branch
$ git push origin my-feature
```

Depois que sua solicitação pull for mesclada, você pode excluir seu branch

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - consulte a [LICENÇA](LICENSE) para mais detalhes.

---

Feito com 💚 por Vilmar Batista 🤝 [Veja meu linkedin](https://www.linkedin.com/in/vilmarbatista/)
