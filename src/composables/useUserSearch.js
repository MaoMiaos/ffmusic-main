import { onMounted, ref } from 'vue';
import { search } from '../api/user.js';

export const useUserSearch = pagination => {
  const data = ref([]);

  const fetchData = () => {
    search({ page: 0 }).then(res => {
      console.log(pagination);
      const pageble = {
        page: pagination.value.page - 1,
        size: pagination.value.rowsPerPage
      };

      search(pageble).then(res => {
        data.value = res.content;
        pagination.value.page = res.number - 1;
        pagination.value.rowsNumber = res.totalElement;
      });
    });
  };
  //注入mount事件
  onMounted(fetchData);
  return {
    data,
    pagination,
    fetchData
  };
};
