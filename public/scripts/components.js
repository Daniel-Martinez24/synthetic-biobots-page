// Aquí se añade el JavaScript principalt

function Redes(props) {
    return (
      <div className="Redes"> 
          <a href={props.twitter} target="_blank">
          <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.82143 0H1.17857C0.527902 0 0 0.527902 0 1.17857V9.82143C0 10.4721 0.527902 11 1.17857 11H9.82143C10.4721 11 11 10.4721 11 9.82143V1.17857C11 0.527902 10.4721 0 9.82143 0ZM8.62076 3.89911C8.62567 3.96786 8.62567 4.03906 8.62567 4.10781C8.62567 6.23661 7.00513 8.68951 4.04397 8.68951C3.13058 8.68951 2.28348 8.42433 1.57143 7.96763C1.70156 7.98237 1.82679 7.98728 1.95938 7.98728C2.71317 7.98728 3.40558 7.73192 3.95804 7.29978C3.25089 7.28504 2.6567 6.82098 2.4529 6.18259C2.70089 6.21942 2.92433 6.21942 3.17969 6.15312C2.44308 6.00335 1.89062 5.35513 1.89062 4.57187V4.55223C2.10424 4.67254 2.35469 4.74621 2.61741 4.75603C2.39653 4.60911 2.21546 4.40979 2.09036 4.17586C1.96526 3.94194 1.90001 3.68068 1.90045 3.4154C1.90045 3.11585 1.97902 2.84085 2.11897 2.60268C2.91205 3.57991 4.1029 4.2183 5.43862 4.28705C5.21027 3.19442 6.0279 2.30804 7.01004 2.30804C7.47411 2.30804 7.89152 2.50201 8.18616 2.81629C8.54955 2.74754 8.89821 2.6125 9.20759 2.42835C9.08728 2.80156 8.83438 3.11585 8.50045 3.31473C8.82455 3.28036 9.13884 3.18951 9.42857 3.06429C9.21004 3.38594 8.93504 3.67076 8.62076 3.89911Z" fill="black"/>
          </svg>
          </a>
  
          <a href={props.linkedin} target="_blank">
          <svg  viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.28571 0.75H0.712054C0.319196 0.75 0 1.08984 0 1.50703V10.493C0 10.9102 0.319196 11.25 0.712054 11.25H9.28571C9.67857 11.25 10 10.9102 10 10.493V1.50703C10 1.08984 9.67857 0.75 9.28571 0.75ZM3.02232 9.75H1.54018V4.73906H3.02455V9.75H3.02232ZM2.28125 4.05469C1.8058 4.05469 1.42188 3.64922 1.42188 3.15234C1.42188 2.65547 1.8058 2.25 2.28125 2.25C2.75446 2.25 3.14062 2.65547 3.14062 3.15234C3.14062 3.65156 2.7567 4.05469 2.28125 4.05469ZM8.57812 9.75H7.09598V7.3125C7.09598 6.73125 7.08482 5.98359 6.32589 5.98359C5.55357 5.98359 5.43527 6.61641 5.43527 7.27031V9.75H3.95313V4.73906H5.375V5.42344H5.39509C5.59375 5.02969 6.07813 4.61484 6.79911 4.61484C8.29911 4.61484 8.57812 5.65313 8.57812 7.00313V9.75Z" fill="black"/>
          </svg>
          </a>
      </div>
    );
  }

function Tarjetas(props) {
    return (
        <div className="Tarjetas" > 
            <img 
            src='https://i2.wp.com/culturageek.com.ar/wp-content/uploads/2019/07/Culturageek.com_.ar-Sailor-Moon-Naoko-Takeuchi-Pretty-Guardians-Anime-Manga-03.jpg?fit=816%2C550&ssl=1'
            alt='sailor'
            ></img>
            <p id ="nombre">{props.nombre} </p>
            <p id = "puesto">{props.puesto}</p>
            <Redes 
            twitter = 'https://twitter.com/dan24diaz'
            linkedin = '#' />
        </div>
    );
} 

function Equipos(props) {
return (
        <div className="Equipos"> 
            <h2>{props.title}</h2>
            <div id = "tarjetas">
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
                <Tarjetas nombre='Karol Tonantzin' puesto ='Medusa LAB-WORKERS' />
            </div>
        </div>
    );
}

function IntegrantesComponent() {
    return (
        <div className="Integrantes"> 
          <div>
            <h2>Integrantes</h2>
          </div>
          <Equipos title='Medusas' />
        </div>
    );
}

ReactDOM.render(<IntegrantesComponent />, document.getElementById('tarjetas'));
