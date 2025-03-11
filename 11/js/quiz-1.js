class Lecture {
    constructor(hasTutor, lectId, members){
        this.hasTutor = hasTutor;
        this.lectId = lectId;
        this.members = members;
    }   
}

const lec1 = new Lecture(true, 'L001', ['Ahn', 'Han', 'Park']);
const lec2 = new Lecture(false, 'L002', ['Choi', 'Kim']);

function getStudents(Lecture){
    let{hasTutor, lectId, members} = Lecture;
    if(!hasTutor){
        let students =[...members];
        return students;
    } else{
        let [teacher, ...students] = members;
        return students;
    }
}

console.log(`강의명: ${lec1.lectId}, 수강생: ${getStudents(lec1)}`);
console.log(`강의명: ${lec2.lectId}, 수강생: ${getStudents(lec2)}`);
