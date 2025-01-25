-- create a table

CREATE TABLE consultaNITS_pais (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) UNIQUE NOT NULL,
  rut VARCHAR (150) NOT NULL,
  description_rut VARCHAR (150) NOT NULL,
  lenguaje ENUM("Español", "English", "Français") NOT NULL,
  status ENUM("Activo", "Innactivo") NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE consultaNITS_razon_s (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name_razon VARCHAR(150) UNIQUE NOT NULL,
  client_id BIGINT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);


CREATE TABLE consultaNITS_Nits (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  second_name VARCHAR(50) NOT NULL,
  surname VARCHAR(50) NOT NULL,
  second_surname VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE consultaNITS_Registro (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  type ENUM("PERSONA NATURAL", "PERSONA JURIDICA") NOT NULL,
  description VARCHAR(250) NOT NULL,
  status VARCHAR(50) NOT NULL,
  status_description VARCHAR(250) NOT NULL,
  id_pais INTEGER NOT NULL,  
  id_razon INTEGER,     
  id_p_natural INTEGER,   
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  FOREIGN KEY (id_pais) REFERENCES consultaNITS_pais(id),
  FOREIGN KEY (id_razon) REFERENCES consultaNITS_razon_s(id),
  FOREIGN KEY (id_p_natural) REFERENCES consultaNITS_Nits(id)
);

CREATE TABLE consultaNITS_Users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  id_user INTEGER NOT NULL,
  id_Registro INTEGER NOT NULL UNIQUE,
  description VARCHAR(250) NOT NULL,
  status VARCHAR(50) NOT NULL,
  status_description VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  FOREIGN KEY (id_Registro) REFERENCES consultaNITS_Registro(id)
);

-- insert some values
INSERT INTO consultaNITS_pais (name,rut,description_rut,lenguaje,status,created_at,updated_at)
VALUES 
    ('Colombia', 'DIAN', 'Dirección de Impuestos y Aduanas Nacionales (DIAN)', 'Español', 'Activo', Now(), Now()),
    ('Chile', 'SII', 'Servicio de Impuestos Internos (SII)', 'Español', 'Activo', Now(), Now()),
    ('Argentina', 'AFIP', 'Administración Federal de Ingresos Públicos (AFIP)', 'Español', 'Activo', Now(), Now()),
    ('El Salvador', 'DGII', 'Dirección General de Impuestos Internos (DGII)', 'Español', 'Activo', Now(), Now()),
    ('España', 'AEAT', 'Agencia Estatal de Administración Tributaria (AEAT)', 'Español', 'Activo', Now(), Now()),
    ('Guatemala', 'SAT', 'Superintendencia de Administración Tributaria (SAT)', 'Español', 'Activo', Now(), Now()),
    ('Mexico', 'SAT', 'Servicio de Administración Tributaria (SAT)', 'Español', 'Activo', Now(), Now());

INSERT INTO consultaNITS_razon_s (name_razon, client_id, created_at, updated_at)
VALUES 
    ('Razón Social A', 123456789, NOW(), NOW()),
    ('Razón Social B', 987654321, NOW(), NOW()),
    ('Razón Social C', 112233445, NOW(), NOW());

INSERT INTO consultaNITS_Nits (first_name, second_name, surname, second_surname, created_at, updated_at)
VALUES 
    ('Juan', 'Carlos', 'Pérez', 'Gómez', NOW(), NOW()),
    ('Maria', 'José', 'López', 'Sánchez', NOW(), NOW()),
    ('Pedro', 'Luis', 'Martínez', 'Rodríguez', NOW(), NOW());

INSERT INTO consultaNITS_Registro (type, description, status, status_description, id_pais, id_razon, id_p_natural, created_at, updated_at)
VALUES 
    ('PERSONA NATURAL', 'Descripción de persona natural A', 'Activo', 'Descripción activa de persona natural A', 1, 1, 1, NOW(), NOW()),
    ('PERSONA JURIDICA', 'Descripción de persona jurídica B', 'Inactivo', 'Descripción inactiva de persona jurídica B', 2, 1, NULL, NOW(), NOW()),
    ('PERSONA NATURAL', 'Descripción de persona natural C', 'Activo', 'Descripción activa de persona natural C', 3, 1, 2, NOW(), NOW());

INSERT INTO consultaNITS_Users (id_user, id_Registro, description, status, status_description, created_at, updated_at)
VALUES 
    (1, 1, 'Usuario asociado a persona natural A', 'Activo', 'Descripción activa del usuario', NOW(), NOW()),
    (2, 2, 'Usuario asociado a persona jurídica B', 'Inactivo', 'Descripción inactiva del usuario', NOW(), NOW()),
    (3, 3, 'Usuario asociado a persona natural C', 'Activo', 'Descripción activa del usuario', NOW(), NOW());

-- fetch some values
SELECT * 
FROM consultaNITS_Registro;


