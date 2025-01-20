# AppAxiomaPos v1.0

## **Sistema POS Versátil**

### **Introducción**

El sistema AxiomaPos versátil está diseñado para optimizar la gestión de ventas e inventarios en diversos negocios, como restaurantes, tiendas y hoteles. Ofrece recomendaciones personalizadas, automatiza tareas administrativas y mejora la eficiencia operativa mediante el uso de inteligencia artificial.

## **Imagen de Portada** 

![Captura de pantalla 2024-11-22 175218](https://github.com/user-attachments/assets/aab4a0aa-e1e6-4347-8ce1-8dad2123f8aa)

## **Objetivo del Proyecto**

El sistema está diseñado para automatizar la gestión de ventas, inventarios y tareas administrativas en restaurantes, tiendas y hoteles etc.

### **Sectores a los que está dirigido:**
-	Restaurantes
-	Tiendas
-	Hoteles

## **Tecnologías Utilizadas**

### **Frontend:**
   - **React:** Para construir la interfaz de usuario.  
   - **Material-UI:** Diseño moderno e intuitivo.
     
### **Backend:**
   -	**Laravel:** Gestión de la lógica del servidor.
   -	**MySQL:** Almacenamiento de datos.
   -	**Redis:** Mejora del rendimiento mediante almacenamiento en caché.
     
### **Lenguajes:**
   -  PHP, JavaScript, TypeScript.

## **Perfil del Equipo**

### **Juan Carlos Martinez M**
**Rol:** Desarrollador Frontend
   - Diseñó la página web utilizando React y Material-UI para crear una interfaz moderna e intuitiva.
   - Consumió las APIs utilizando React Query y Axios, implementando caché para mejorar el rendimiento.
   
### **Brayan Steven Gomez**
**Rol:** Desarrollador Backend
   - Desarrolló la API utilizando Laravel y Laragon, asegurando una arquitectura sólida y eficiente para el sistema.
   
### **Cristian Vergara Pérez**
**Rol:** Diseñador y Traductor
   - Colaboró en el diseño de interfaces junto a Juan Carlos.
   - Tradujo la página entre español e inglés para hacerla accesible a un público más amplio.
   - Ajustó las pantallas para garantizar compatibilidad con diferentes resoluciones.
   
### **Andy Gonzales torres**
**Rol:** Desarrollador Backend
    - Apoyó el desarrollo del backend trabajando con APIs.
    - Implementó Redis en el backend para optimizar el almacenamiento en caché y mejorar la velocidad del sistema.
    
### **Edgar Hernando puerta** 
**Rol:** Aprendiz de Desarrollo
    - Está en proceso de aprendizaje, contribuyendo con tareas sencillas mientras adquiere conocimientos en el desarrollo del sistema.

## **Funcionalidades del Sistema**
- **Gestión de Inventarios:** Agiliza el seguimiento de productos.  
- **Panel de Ventas:** Facilita el procesamiento de pagos y facturas.  
- **Automatización:** Gestión de tareas administrativas como facturación y pagos.  
- **Recomendaciones Personalizadas:** Utiliza IA para sugerencias basadas en hábitos de compra.  
- **Chatbots:** Para soporte al cliente y automatización de pedidos. 

## **Capturas de Pantalla** 

### **Gestión de Empleados**
![Captura de pantalla 2025-01-07 215144](https://github.com/user-attachments/assets/5302e537-9f19-4329-94f8-92c6ef09158f)

### **Gestión de Categorías**
![image](https://github.com/user-attachments/assets/4f1500eb-8202-4612-8aa3-5f0fb1bd0076)

### **Panel de Ventas**
![image](https://github.com/user-attachments/assets/3b455efd-0fa3-44dd-a11b-4529a87e41ef)

## **Video Demo (Opcional)**

## **Guía para Clonar y Ejecutar el Proyecto**

### **Frontend (React):**
```bash
git clone https://github.com/tu-repo/axioma-pos-frontend.git
cd axioma-pos-frontend
npm install
npm start
```
### **Backend (Lavarel):**
El backend está desarrollado en Laravel. Antes de ejecutarlo, asegúrate de tener instalado un entorno de desarrollo local, como Laragon.

### **¿Cómo instalar Laragon?**
Descarga e instala Laragon desde https://laragon.org/.
Configura Laragon para que use PHP y MySQL, necesarios para Laravel.

### **Notas adicionales:**
- Crea una base de datos en phpMyAdmin (que viene incluido con Laragon) o en cualquier otro cliente
- Configura el archivo .env de Laravel con los datos de tu base de datos
  
```bash
DB_DATABASE=nombre_base_datos
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

```bash
git clone https://github.com/tu-repo/axioma-pos-backend.git
cd axioma-pos-backend 
composer install 
php artisan serve
```
