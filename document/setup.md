# Figsat Backend

Backend do figged desenvolvido em php e laravél.

## Deploy

```bash
# Conectar no servidor via ssh
ssh suporte@10.0.0.133

# Atualizar ou clonar o repositório do projeto
git pull
git clone https://github.com/expfig/figged-front.git

# Ir pro diretório do projeto
cd /home/projects/figged-frontend

# Instalar as dependências
npm install
yarn add

# Checar o arquivo .env
cat .env

# Fazer o build da aplicação
npm run build

# Iniciar ou reiniciar via pm2 o servidor
pm2 start serve.js --name figged-frontend
pm2 restart figged-frontend

# Verificar o status do servidor
pm2 status
pm2 monit

# Verificar manualmente se a aplicação está online
http://10.0.0.133:1107
http://grupofigueiredo.com.br:1107
```
