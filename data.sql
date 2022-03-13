CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username varchar(25) NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    contraseña varchar(12) NOT NULL,
    fecha DATE
);

INSERT INTO usuarios (username, email, contraseña, fecha) VALUES ('userone', 'one@gmail.com', 'hasdvs', 'NOW()');
INSERT INTO usuarios (username, email, contraseña, fecha) VALUES ('usertwo', 'two@gmail.com', 'adfsww', 'NOW()');
INSERT INTO usuarios (username, email, contraseña, fecha) VALUES ('usertre', 'tre@gmail.com', 'hiaajair', 'NOW()');
INSERT INTO usuarios (username, email, contraseña, fecha) VALUES ('userfour', 'four@gmail.com','gdsfsvou', 'NOW()');

