let AC_GAME_OBJECTS = [];

class AcGameObject{
    constructor(){
        AC_GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_call_start = false;
    }

    start(){

    }

    update(){

    }

    destroy(){
        for(let i in AC_GAME_OBJECTS){
            if(AC_GAME_OBJECTS[i] === this){
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp = 0;

let AC_GAME_OBJECTS_FRAME = (timestamp) => {
    for(let obj of AC_GAME_OBJECTS){
        if(!obj.has_call_start){
            obj.has_call_start = true;
            obj.start();
        }else {
            obj.timedelta = timestamp - last_timestamp;
            // console.log(obj.timedelta);
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_OBJECTS_FRAME);
}

requestAnimationFrame(AC_GAME_OBJECTS_FRAME);


export{
    AcGameObject
}