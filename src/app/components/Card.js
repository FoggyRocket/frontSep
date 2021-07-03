


//como mo version de React es actual
 //para un componente const o function ya no es necesario importar React
 //



 const Card = ({img,children}) => (
    <div className="card">
        {/* esto eess un if ternario y validamos si exite imagen 
            de lo contrario renderizara otra 
         */}
        {img ?
            <img src={img} className="card-img-top"/>
            :
            ''
        }
        <div className="caard-body">
            {children}
        </div>
    </div>
 )

 export default Card