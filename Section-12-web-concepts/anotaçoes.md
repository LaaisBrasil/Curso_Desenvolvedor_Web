### SESSÃO 12 - CONCEITOS DA WEB ###



*** 198. INICIANDO NA WEB ***
- historia da internet

*** 199. PROTOCOLO HTTP ***
- FLUXO BASICO DE UMA CONECÇÃO HTTP
1. Informa o URL

2. Browser gera requisição:
- GET / HTTP / 1.1
  Host: www.google.com.br

3. Servidor web gera a resposta:
- HTTP /1.1 200 OK
  content-Type: text/html; charset=UTF-8
  date: Mon, 30 April 2018 17:00:02 GMT
  connection: close
  content-Length: 438
  <html>...

4. Browser exibe a pagina

- 8 METODOS SUPORTADO PELO HTTP
1. GET *
2. POST *
3. PUT
4. DELETE
5. TRACE
6. OPTIONS
7. CONNECT
8. HEAD

*:Mais importantes

- FLUXO DE REQUISIÇÃO E RESPOSTAS

* CLIENTE -> URL + PARAMETROS -> SERVIDOR
* CLIENTE <- HTML, CSS, JS, Imagens, etc <- SERVIDOR

- GRUPO DE STATUS DDA HTTP

. 1XX - Informação
. 2XX - Sucesso
. 3XX - Redirecionamento
. 4XX - Erro no Cliente 
. 5XX - Erro no Servidor

*** 200. SERVIDOR WEB ***

Exemplos: 
- Microsoft IIS
- Apache HTTP Service
- Tom Cast
- Node JS
- JBoss
- NGiNG

- WEB X DNS

Cliente solicita: 
-> Cliente: "www.cod3r.com.br"
-> DNS Server: "www.cod3r.com.br = IP 23.67.100.9 (ex). 
-> Resposta enviada para o WEB Server.

- VISUAL HOSTING

-> Web Server: pode fornecer mais de 1 IP 
ex: "www.site1.com.br"
    "www.site2.com.br"
    "www.site3.com.br"

- ESTRUTURAS DE PASTAS

-> Web Server 
  - Imagens
  - CSS
  - JS
  - Index.html
  - about.html


- WEB STACK

-> SISTEMA OPERACIONAL (L = linux)
-> WEB SERVER (A = apache) 
-> DB (M = MySQL)
-> LINGUAGENS  (P = PHP)
*LAMP*

*** 202. CLIENT SIDE vs SERVER SIVE ***

- EVOLUÇÃO DAS ARQUITETURAS
-> mainframe
-> client - server
-> web - server-side
-> front-end + services

*** 203. CONTEUDO ESTATICO vs DINAMICO ***

- server side:
   -> estatico: é quando o servidor utiliza de arquivos fisicos para servir pagina web.
   -> dinamico: é quando o servidor utiliza de um codigo. Personalização de conteudo. (ex.: atualização de hora, datas, pontuações, etc... )
      * organização de pastas dinamicas : ex.: 
        - /client
        - /produtps/top
        - /usuario/12 

*** 204. HTML, CSS E JS ***

- HTML -> ESSTRUTURA DA APLICAÇÃO
- CSS -> ESTILO 
- JS -> DINAMICA

*** 205. DNS ***

- O QUE É DNS: servidor que traduz os nomes de dominios em endereços IP
(Servidor DNS).
  -> DNS funciona sobre o protocolo UDP na porta 53.

  -> Funcionamento Basico do DNS 
    1. Usuario informa o endereço no browser
    2. Computador envia uma consulta DNS para o servidor local
    3. O servidor responde com o endereço IP
    4. Computador acessa o servidor a partir do IP obtido

  -> Busca Recursiva: um DNS vai chamnado o outro ate encontrar o endereço de fato.

  -> Busca Interativa: DNS clinet faz o pedido, o DNS server responde com um DNS referencia - ou seja, onde o IP esta resgistrado - ai o DNS Client é redirecionado ao DNS Server que há o registro do IP da pagina.

  -> DNS Records  
    . A - IPv4
    . AAAA - IPv6
    . MX - Serviodr de e-mail
    . NS - Servidor DNS
    . Cname - Canonical Name (apelido)


*** 206. HTTPs (seguro) ***

. HTTP + TLS (transport Layer Security Protocol)
. HTTP + SSL 
*quase mesmos protocolos, com versoes de protocolos diferentes.

-> HTTPseguro
   . Dados criptografados usando os protocolos TLS ou SSL
   . Protoge contra interceptaçoes (MITM)
   . Criptografa todas as informacoes: URL, cookies e headers
   . Usa certificados digitais

*** 207. WEB SERVICES ***

web service: 
     -> Simple Object Access Protocol (SOAP) - versao mais antiga e complexa (WSDL, XML, RPC, Burocrafico) - baseado em /em formato XML

     -> Representational State Transfer (REST) - mais nova e menos complicada - (JSON, HTTP, Simples) 

Escolhas de web services : SOA vs MICRO SERVICES

CONCLUSÃO: servisos que sao disponibiizados pela sua aplicação que rodam em cima de tecnologias web (HTTP), baseadas em XML (WEB SERVICE SOAL) e a tecnologia WEB SERVICE REST (baseada em JSON, mas aceita XML).

*** 208. COMPUTAÇÃO EM NUVEM ***

 conceitos basicos de serviços em nuvem, AWS (amazon), Google Cloud, etc.