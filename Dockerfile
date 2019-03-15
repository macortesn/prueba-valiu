FROM node:10
WORKDIR /valiu_test
COPY package.json /valiu_test
RUN npm install
COPY . /valiu_test

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && node src/index.js
