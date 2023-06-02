# REALIDAD

## TABLAS

Character[{characters}]

Favorite

User
/////////////////////////////////////////////////////////////////////////////////////////
relacion 1:1

User 1 : 1 Favorite

Favorite 1 : 1 User
/////////////////////////////////////////////////////////////////////////////////////////
User [{userId: 1, favId: 1}]

relacion N:M

Favorite M : N Character

Character M : N Favorite

Se crea TABLA INTERMEDIA
FavoriteCharacter [{favId:1, charId:1},{favId:1,charId:2},{favId:2,charId:3}]
User [{userId:1,favId:1{charId:1,2}}, {userId:2,favId{charId:3}}]

# RICK AND MORTY

## TABLAS

Characters

Characters dentro de favorites

User
///////////////////////////////////////////////////////////////////////////////////////
relacion M:N
User M : N Favorites
