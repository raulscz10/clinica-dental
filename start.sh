###########################################################

# crear base de datos
sequelize db:create

# Crear el modelo de Rol
sequelize model:generate --name Rol --attributes 'name_rol:string'

# Crear el modelo de Direcciones
sequelize model:generate --name Direction --attributes 'street:string,number:char,postal:char'

# Crear el modelo de Tratamientos
sequelize model:generate --name Treatment --attributes 'name_treatment:string'

# Crear el modelo de Horarios
sequelize model:generate --name Schedule --attributes 'schedule_ini:time,schedule_fi:time'

# Crear el modelo de Usuarios
sequelize model:generate --name User --attributes 'user_name:string,user_surname:string,user_age:integer,user_phone:string,user_gmail:string,user_password:string,id_rol:integer,id_street:integer'

# Crear el modelo Consultas
sequelize model:generate --name Inquiries --attributes 'inquiries_door:char,id_doctor:integer'

# Crear el modelo Citas
sequelize model:generate --name Date --attributes 'date:date,id_treatment:integer,id_patient:integer,id_schedule:integer,id_inquiries:integer'

# Comando Para Ejecutar las Migraciones
sequelize db:migrate

# Comando Para Revertir las Migraciones
sequelize db:migrate:undo:all

# Comando Para Crear Seed Rol
sequelize seed:generate --name "seed-rol"

# Comando Para Crear Seed Direction
sequelize seed:generate --name "seed-direction"

# Comando Para Crear Seed Treatment
sequelize seed:generate --name "seed-treatment"

# Comando Para Crear Seed Schedule
sequelize seed:generate --name "seed-schedule"

# Comando Para Crear Seed User
sequelize seed:generate --name "seed-user"

# Comando Para Crear Seed Consulta
sequelize seed:generate --name "seed-inquiries"

# Comando Para Crear Seed Cita
sequelize seed:generate --name "seed-date"

# ejecutar seed
sequelize db:seed:all

# revertir seed
sequelize db:seed:undo