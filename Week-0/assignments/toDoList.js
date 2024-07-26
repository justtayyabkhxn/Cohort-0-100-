var toDolist = [];
class toDo {
    constructor() {

    }
    add(taskname, taskDeadlineDay, taskDeadlineMonth, taskDeadlineTime) {
        toDolist.push({
            "task": `${taskname}`,
            "deadLine": `${taskDeadlineTime} , ${taskDeadlineDay} , ${taskDeadlineMonth}`
        })
    }
    static display(taskno) {
        console.log(`Task: ${toDolist[taskno - 1]["task"]}\nDeadline: ${toDolist[taskno - 1]["deadLine"]} `);
    }
    static getAll() {
        for (let i = 0; i < toDolist.length; i++)
            console.log((i + 1) + ". " + toDolist[i]["task"]);
    }
}

const task1 = new toDo();
const task2 = new toDo();

task1.add("Revise Binary Trees", 15, "june", "1:30 am");
task2.add("Revise Arrays", 20, "june", "1:30 am");

toDo.display(1);
toDo.getAll();
