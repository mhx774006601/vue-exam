<template>
  <div class="hello">
    <h2>vue实现三级联动</h2>
    <div id="example">
        <select v-model="prov">
          <option v-for="option in arr" :value="option.name" :key="option.id">
            {{ option.name }}
          </option>
        </select>
        <select v-model="city" v-if="city">
          <option v-for="option in cityArr" :value="option.name" :key="option.id">
            {{ option.name }}
          </option>
        </select>
        <select v-model="district" v-if="district">
          <option v-for="option in districtArr" :value="option.name" :key="option.id">
            {{ option.name }}
          </option>
        </select>
    </div>
  </div>
</template>

<script>
import arrAll from '../views/data.js'

export default {
  name: 'ThreeLeveldropDown',
  components:{
      arrAll
  },
  data() {
      return{
          arr: arrAll,
          prov: '北京',
          city: '北京',
          district: '东城区',
          cityArr: [],
          districtArr: []
      }   
    },
    methods: {
        //第一个选择下拉触发时，联动市级下拉框更新
        updateCity: function () {
            for (var i in this.arr) {
                var obj = this.arr[i];
                if (obj.name == this.prov) {
                    this.cityArr = obj.sub;
                    break;
                }
            }
            // this.city = this.cityArr[1].name;
             if(this.cityArr && this.cityArr.length > 0 && this.cityArr[1].name) {
                this.city = this.cityArr[1].name;
            } else {
                this.city = '';
            }
        },
        //触发市级下拉框的时候，区级下拉框联动更新
        updateDistrict: function () {
            for (var i in this.cityArr) {
                var obj = this.cityArr[i];
                if (obj.name == this.city) {
                    this.districtArr = obj.sub;
                    break;
                }
            }
            if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
                this.district = this.districtArr[1].name;
            } else {
                this.district = '';
            }
        }
    },
    beforeMount: function () {
        this.updateCity();
        this.updateDistrict();
    },
    watch: {
        prov: function () {
            this.updateCity();
            this.updateDistrict();
        },
        city: function () {
            this.updateDistrict();
        }
    }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
select{
  width:300px;
  height:40px;
  line-height: 40px;
  border:1px solid #ccc;
  border-radius: 6px;
}
</style>
