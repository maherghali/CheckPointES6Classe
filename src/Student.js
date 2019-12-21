class Human{
    name;
    job;
    skills=[];
    constructor(){
        this.name="Maher";
        this.job="Engineer";
        this.skills=['BI', '.Net']
    }




}

class Student extends Human{

    // Finish this class

    constructor(){
        super();
    }
    getJob(Newjob){
        this.job=Newjob;
     console.log(this.job)
    }

    leaveJob(){
        this.job="unemployed";
        console.log(this.job);
    }

    learnNewSkill(skill){
        this.skills.push(skill);
        console.log(this.skills);
    }

    forgetSkill(skill){
        this.skills=this.skills.filter(s => s!=skill);
        console.log(this.skills);
    }

}
const me = new Student();

me.getJob("Web developer");
me.leaveJob();
me.learnNewSkill("React");
me.forgetSkill("React");

