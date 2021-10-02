## Calendar

| Метод | URL  |Описание |
| ------------- | ------------- | ------------- |
| GET | calendar | Получить события |
| POST | user/registration | Регистрация пользователя

### GET `calendar`
#### Query:
- days - количество дней
#### Response:
```typescript
  type: 'birthday' | 'corporate';
  text: string;
  date: string;
```
#### Example:
- `calendar?days=4` - вернутся события, которые происходят в течение четырёх дней

### POST `user/registration`
#### Body:
```typescript
avatarUrl?: string;
birthday: string;
position: string;
fullName: string;
```

