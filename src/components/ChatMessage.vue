<template>
    <div class="message" :class="{ 'from-user': owner }">
        {{message.text}}
        

        <audio v-if="message.audioURL" :src="message.audioURL" controls></audio>

        <br><span class="sender">from UID {{message.sender}}</span>
    </div>
</template>

<script>


export default {
    props: ['message', 'owner']
}
</script>
<style scoped>
    .message {
        background: #dddddd;
        color: black;
        margin-left: 0;
        margin-right: 10px;
        margin-left: auto;
        border-radius: 5px;
        padding: 12px;
        display: inline-block;
    }

    .from-user {
        margin-left: 10px;
        margin-right: auto;
        background: #91bbff;
    }
    .sender {
        font-size: 0.7rem;
    }
</style>
