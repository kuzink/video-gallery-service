# Video Gallery Service
## author: Kuzin Kanstantsin

1. Go to browser-app folder -> cd browser-app
2. Install ui-dependencies (will create node_modules folder) -> npm install
3. Run ui-only with live-reload on localhost:3000 -> npm start
4. Build ui-bundle (will create build folder) -> npm run webpack
5. Build jar with both ui and backend (from root folder) -> mvn package


#TODO:
1. Header:
	- слева: добавить Logo-название со ссылкой на Landing-page, убрать BackButton
	- в центре: Значок скрытия/открытия Sidebar-а, Поиск 
	- справа: добавить аватар и имя пользователя, кнопки-значки: FullScreen, Смена языка, Смена темы
2. Хранить параметры запроса item-ов в Cookies (LocalStorage)
3. Добвавить footer
4. Найти и добавить удобный видео-плеер, вместо дефолтного
5. Рефакторинг layout-ов
6. Выровнять на мелких экранах

Общие задачи:
1. Заполнить README-файл (краткое описание работы и необходимые ограничения)