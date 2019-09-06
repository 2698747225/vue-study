<template>
  <div>
    <label>{{date|dateFormat('yyyy-mm-dd hh:mm:ss')}}</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date()
    };
  },
  filters: {
    dateFormat(date, type) {
      if (
        date &&
        (typeof date === "string" ||
          typeof date === "number" ||
          date instanceof Date)
      ) {
        const oriDate = new Date(date);
        const year = oriDate.getFullYear();
        const month = oriDate.getMonth() + 1;
        const day = oriDate.getDate();
        const hour = oriDate.getHours();
        const minute = oriDate.getMinutes();
        const second = oriDate.getSeconds();
        let formatType = type.toLocaleLowerCase();
        switch (formatType) {
          case "yyyy-mm-dd hh:mm:ss":
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
          case "yyyy-mm-dd":
            return `${year}-${month}-${day}`;
        }
      } else {
        return date;
      }
    }
  }
};
</script>