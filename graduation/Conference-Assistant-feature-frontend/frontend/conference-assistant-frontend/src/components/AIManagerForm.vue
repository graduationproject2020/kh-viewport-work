<template>
    <div class="aimanager-form">
        <img src="../img/ai.png">
        <h4>회의 중재&nbsp;&nbsp;&nbsp;<toggle-button @change="onChangeEventHandler" :value="true" :labels="{checked: 'ON', unchecked:'OFF'}"></toggle-button></h4>
        <textarea class="textarea" disabled v-auto-scroll-bottom></textarea>
        <div v-if="onChanged" class="welcome-div">
                <p> '1차 정기회의' 주최자는 user1<br>참여자는 user2, user3입니다.
                    <br><br>
                    오늘의 주요 안건은 회의록 작성, 개발 일정 변경 입니다.
                </p>
                <div v-for="(start, index) in start_msg" :key="index" >
                    <p class="start-div">{{start}}</p>
                </div>
        </div>
    </div>
</template>
<script>
import { EventBus } from '../EventBus';
export default {
    name : 'AIManagerForm',
    data(){
        return{
            onChanged : true,
            start_msg : '',
            event : ''
        }
    },
    methods : {
        onChangeEventHandler(){
            this.onChanged = !this.onChanged;
        }
    },
    mounted(){
        this.event = EventBus;

        this.event.$on('first', (info)=>{
            this.start_msg = info
        })
    }
}
</script>
<style scoped>
.aimanager-form{
   position: fixed;
   left: 75%;
   top: 68%;
   width: 300px;
   height: 380px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
   overflow-y:scroll;

}
textarea{
   position: fixed;
   left: 75%;
   top: 68%;
   width: 300px;
   height: 380px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   opacity:0;
   filter: alpha(opacity=0);
   -ms-filter: alpha(opacity=0);
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
}
.aimanager-form h4{
    margin-top:-24%;
    margin-left: 5%;
    font-size: 20px;
    font-weight: 700;
}
img{
    margin-top:-18%;
    margin-left:-25%;
    width:47px;
    height: 45px;
}
.aimanager-form .welcome-div{
    margin-top:10px;
    padding: 8px 3px 3px 10px;
    font-size: 14px;
    font-weight: 500;
    background: rgb(253, 239, 199);
    color:rgb(51, 51, 51);
    margin-left: -52px;
    width:155%;
    height: 40%;
    border-radius: 0.2rem;
    box-shadow: 4px 4px 2px rgb(204, 204, 204);
}
.toggle-btn{
   width:50px;
}
.start-div{
    margin-top:10px;
    padding: 10px 4px 3px 10px;
    font-size: 14px;
    font-weight: 500;
    background: rgb(253, 239, 199);
    color:rgb(51, 51, 51);
    margin-left: -4%;
    width:105%;
    height: 40%;
    border-radius: 0.2rem;
    box-shadow: 4px 4px 2px rgb(204, 204, 204);
}
</style>