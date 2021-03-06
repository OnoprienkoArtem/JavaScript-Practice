Протокол HTTP

HTTP (англ. HyperText Transfer Protocol – «протокол передачи гипертекста») –
специальный протокол предназначенный для передачи данных в виде текста.
Изначально задумывался для передачи документов в формате «HTML», 
в настоящий момент используется для передачи произвольных данных.
Для непосредственной передачи данных по сети используется протокол TCP, 
HTTP работает на его основе и отвечает за «смысловую нагрузку» тех данных, 
которые пересылаются.

Протокол HTTP строиться на следующих принципах:

• взаимодействие клиент – сервер;
• отсутствие состояний;
• разные методы передачи данных (GET, POST, PUT, DELETE);
• различные статусы ответов (Status Codes);
• служебная информация содержится в заголовках (Headers).
Рассмотрим некоторые ключевые особенности работы с протоколом HTTP.

Структура протокола:

• стартовая строка (Starting line) – тип сообщения;
• заголовки (Headers) – параметры сообщения;
• тело сообщения (Message Body) – данные сообщения (обязательно должно 
отделяться от заголовков пустой строкой).
В некоторых случаях тело сообщения может отсутствовать, 
но стартовая строка и заголовок являются обязательными элементами.

Стартовая строка запроса (метод, url, версия):
GET /wiki/HTTP HTTP/1.0
Host: ru.wikipedia.org
Стартовая строка ответа (версия, код состояния, комментарий):
HTTP/1.0 200 OK

Методы HTTP – ключевые слова, которые определяют способ
взаимодействия с сервером (операцию, которую надо произвести с ресурсом).
GET – запрашивает данные из определенного ресурса. Наиболее популярный 
способ загрузить html, css, png или другие данные.
Поддерживает передачу параметров в виде key=value.
GET /path/page?param1=value1&param2=value2 HTTP/1.1

HEAD запрашивает ресурс так же, как и метод GET, но без тела ответа.
Применяется для проверки наличия ресурса и чтобы узнать, 
не изменился ли он с момента последнего обращения.

POST используется для отправки данных пользователя на определённый 
ресурс (URL). Передаваемые данные включаются в тело
запроса. Используется для загрузки файлов на сервер.

PUT заменяет текущие содержимое ресурса данными запроса.
Метод POST предназначен для «создания» новых сущностей, 
а метод PUT для «обновления» ранее созданных данных.

OPTIONS используется для определения параметров соединения 
с определенным ресурсом или для определения возможностей сервера.

DELETE удаляет указанные данные.
Существует не малое количество методов, однако наиболее 
часто применяют два из них: GET и POST.








