# Video Gallery Service
## author: Kuzin Kanstantsin

1. Go to browser-app folder -> cd browser-app
2. Install ui-dependencies (will create node_modules folder) -> npm install
3. Run ui-only with live-reload on localhost:3000 -> npm start
4. Build ui-bundle (will create build folder) -> npm run webpack
5. Build jar with both ui and backend (from root folder) -> mvn package


#TODO:
1. Header: 
    - нет имплементации хэндлеров для значков справа
2. Sidebar: 
    - нет имплементации для пунктов меню (кроме Categories)
    - добавить какой-нибудь блок снизу 
    - возможно сделать фон-картинку для сайдбара
3. Заменить разрешение thumbnail-ов с 400x225 на 448x252, включая thumbnail.gif
4. Найти и добавить удобный видео-плеер, вместо дефолтного
5. Хранить параметры запроса item-ов в Cookies (LocalStorage)

Общие задачи:
1. Заполнить README-файл (краткое описание работы и необходимые ограничения)