<template>
  <div>
    <Button type="success" @click="getdata">Success</Button>
    <Select v-model="model1" style="width:200px" @on-change="sechange" :label-in-value="true">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          city: "北京",
          tid: "23",
          gs: "77"
        },
        {
          id: 0,
          city: "上海",
          tid: "1",
          gs: "66"
        },
        {
          id: 3,
          city: "湖南",
          tid: "2",
          gs: "55"
        },
        {
          id: 4,
          city: "成都",
          tid: "33",
          gs: "99"
        }
      ],
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "xx",
          label: "Ottawa"
        }
      ],
      model1:1
    };
  },
  methods: {
    getdata() {
      this.axios
        .get("https://www.easy-mock.com/mock/5ca4acaa3f49a51e49312ee8/sim/test")
        .then(res => {
          console.log(res);
          this.change(res.data.data.list)
        });
    },
    change(arr) {
      console.log(this.arr);
      for (let i = 0; i <= arr.length - 1; i++) {
        let { id, city } = arr[i];
        this.cityList[i].value = id;
        this.cityList[i].label = city;
        console.log(id, city);
      }

      console.log(this.cityList);
    },
    sechange(obj) {
      console.log(obj.value);
      console.log(obj.label);
    }
  }
};
</script>
<style>
</style>
