import { computed, ref } from 'vue';
import { search } from '../api/user.js';
import { onMounted } from 'vue';

export const useUserSearch = () => {
  const data = ref([]);

  const pagination = ref({
    page: 2,
    rowsPerPage: 10,
    rowsNumber: 0
    // rowsNumber: xx if getting data from a server
  });

  const pagesNumber = computed(() =>
    Math.ceil(data.value.length / pagination.value.rowsPerPage)
  );

  const fetchData = () => {
    search({ page: 0 }).then(res => {
      data.value = data.value.concat(res.content);
      pagination.value.page = res.number + 1;
      pagination.value.rowsPerPage = res.size;
      pagination.value.rowsNumber = res.totalElements;
    });
  };
  //注入mount事件
  onMounted(fetchData);
  return {
    data,
    pagesNumber,
    pagination,
    fetchData
  };
};
