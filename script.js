class company
{
    constructor(modelname,type) 
    {
        this.modelname=modelname;
        this.type=type;
    }
    getcompany()
    {
        return this.modelname;
    }
}

class bike extends company
{
    constructor(modelname,type,engine,launch,country)
    {
        super(modelname,type);
        this.engine=engine;
        this.launch=launch;
        this.country=country; 

    }
    getbike()
    {
        return this.modelname;
    }
   
    
}
 let bike1=new bike('KTM','RC 390 BS6',373.3,2021,'AUSTRIA');
 console.log(bike1.getcompany())
