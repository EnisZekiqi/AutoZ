const VehicleModels = () => {
    return ( 
        <div id="vehicle" className="vehicle ">
            <h1  style={{fontWeight:800,fontSize:40,color:'#040316'}} className="text-center">Vehicle Models </h1>
            <div className="vehicle2 flex overflow-x-auto overflow-y-hidden justify-start md:justify-evenly mt-8">
                <div className="suvs items-center">
                    <p style={{fontSize:14}} className="suvx text-center mt-24">SUVs</p>
                </div>
                <div className="hatchback items-center ">
                <p style={{fontSize:14}} className="text-center mt-24">Hatchbacks</p>
                </div>
                <div className="saloon items-center ">
                <p style={{fontSize:14}} className="text-center mt-24">Saloons</p>
                </div>
                <div className="coope items-center ">
                <p style={{fontSize:14}} className="text-center mt-24">Coupes</p>
                </div>
                <div className="estate items-center ">
                <p style={{fontSize:14}} className="text-center mt-24">Estates</p>
                </div>
                <div className="sport items-center ">
                <p style={{fontSize:14}} className="text-center mt-24">Sports cars</p>
                </div>
            </div>
        </div>
     );
}
 
export default VehicleModels;