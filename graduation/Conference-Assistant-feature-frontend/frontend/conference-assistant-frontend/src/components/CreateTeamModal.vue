<template>
  <transition name="modal-fade">
    <div class="create-team-modal">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
          >
          <slot name="header">
            <span class="phrase"><p>팀 생성하기</p></span>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            ></button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <input type="text" placeholder="   팀 명을 입력해주세요."/>

          </slot>
            <p class="alert-phrase">팀 명은 영문 혹은 영문 숫자를 혼합한 2~15 이내의 글자만 사용 가능합니다.</p>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-gray" @click="close" aria-label="Close modal">Cancle</button>
            <button type="button" class="btn-green" @click="close" aria-label="Close modal">OK</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CreateTeamModal',
    methods: {
      close() {
        this.$emit('close');
      },
      create(){
        //  팀 생성하기 모달 창 연결
        this.$emit('close');

      }
    },
  };
</script>
<style scoped>
.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .3s ease
  }
  .create-team-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(143, 143, 143, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    height:40%;
    width:40%;
    margin:15%;
    border-radius: 0.5rem;
    background: rgb(235, 235, 235);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color:#32a852;
    font-size: 23px;
    text-align: center;
    font-weight: 800;
    margin-left: 25%;
    justify-content: space-between;
  }

  .phrase {
    margin-top:20px;
    margin-left: 65px;
    text-align:center;
    color:rgb(77, 77, 77);
  }

  .alert-phrase{
    margin-top:10px;
    font-size:13px;
  }
  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
  p{
    margin-left: -5%;
    text-align: center;
    margin-top: -11%;
  }
  .btn-close {
    border: none;
    font-size: 100%;
    padding: 40px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

.modal-body input[type="text"]{
  margin-top: -5%;
  margin-left: 2%;
  height: 70px;
  border-radius: 0.3rem;
  width: 95%
}

button.btn-gray {
    margin-top:-15px;
    margin-right: 20px;
    height:50px;
    width:50%;
    background: rgb(173, 173, 173);
    font-size: 18px;
    color: #f3f2f2;
    font-weight: bold;
    border: 1px solid rgb(173, 172, 172);
    border-radius: 0.3rem;
  }
  button.btn-green {
    margin-top: -15px;
    height:50px;
    width:50%;
    background: #32a852;
    font-size: 18px;
    color: #f3f2f2;
    font-weight: bold;
    border: 1px solid #32a852;
    border-radius: 0.3rem;
  }
</style>
</style>