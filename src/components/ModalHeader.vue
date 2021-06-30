<template>
    <b-row class="justify-content-center header">
        <b-col class="header-wrapper" cols="11" md="8" lg="6">
            <router-link class="header-link" :to="{name:'Home'}"> 
                <BIconChevronLeft font-scale="1.2"/> zurück</router-link>
        </b-col>
    </b-row>
</template>

<script>
import { BIconChevronLeft } from 'bootstrap-vue'
export default {
    name: 'ModalHeader',
    components: {
        BIconChevronLeft
    }
}
</script>

<style scoped>
.header{
    position: sticky;
    z-index: 10;
    width: 100%;
    top: 0px;
    margin-right: 0px;
    margin-left: 0px;
}

.header::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 60px;
  margin-left: -15px;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  transform: rotate(180deg);
}

.header-link {
  margin-top: 12px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.dark-mode .header-link {
    color: white;
}

.header-wrapper {
  display: flex;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
}
</style>