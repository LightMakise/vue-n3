<template>
  <div class="exportTable page">

    <div class="my-table">
      <n3-button type="primary" class="pull-right" @click.native="exportTable">导出</n3-button>
      <n3-data-table
        id="datatable"
        height="400px"
        :selection="selection"
        :source="source"
        :columns="columns"
        :select-col="false"
        :search="false"
        :filter-list="filter"
        responsive
      >
      </n3-data-table>

    </div>

  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  export default {
    name: 'ExportTable',
    data(){
      return {
        selection: {
          checkRows: [],
          onSelect (record, checked, checkRows) {
            console.log(record);
          },
          onSelectAll (checked, checkRows, changeRows) {
          },
          getCheckboxProps (record) {
            return {
              checked: false,
              disabled: true
            }
          }
        },
        columns: [
          {
            title: 'ID',
            dataIndex: 'queryRecordId',
            width: '100px',
            render: text => Date.now()
          }, {
            title: '操作时间',
            dataIndex: 'queryDate',
            width: '160px',
            render: (text, record, index) => {
              return `<div>{{'${text}'}}</div>`
            }
          }, {
            title: '操作用户',
            dataIndex: 'userId',
            width: '120px',
            render: (text, record, index) => {
              return `<router-link to="/user/${text}" target="_blank">
                        ${text}
                      </router-link>`
            }
          }, {
            title: 'IP',
            dataIndex: 'ipAddress',
            width: '160px',
            render: text => {
              return text || '127.0.0.1'
            }
          },
          {
            title: '类型',
            dataIndex: 'queryType',
            width: '100px',
            render: (text) => {
              if (text == 2) {
                return `<span>普通</span>`
              }
              return `<span style="color: red;">实时</span>`
            }
          }, {
            title: '耗时(ms)',
            dataIndex: 'timeConsuming',
            width: '100px'
          }, {
            title: '操作',
            dataIndex: 'queryRecordId',
            width: '120px',
            render: (text, record, index) => {
              let type = 'primary'
              if (!record.queryResult) {
                type = 'warning'
              }
              return `<router-link to="/record/${text}" target="_blank">
                        <n3-label type="${type}">详情</n3-label>
                      </router-link>`
            }
          }
        ],
        source: [
          {
            ipAddress: "127.0.0.1",
            queryDate: "2018-02-28T09:38:10.772Z",
            queryRecordId: "zzzzz",
            queryType: 2,
            timeConsuming: 200,
            userId: "a",
          }, {
            ipAddress: "127.0.0.1",
            queryDate: "2018-02-28T09:38:10.772Z",
            queryRecordId: "zzzzz",
            queryType: 2,
            timeConsuming: 200,
            userId: "b",
          }, {
            ipAddress: "127.0.0.1",
            queryDate: "2018-02-28T09:38:10.772Z",
            queryRecordId: "zzzzz",
            queryType: 2,
            timeConsuming: 200,
            userId: "c",
          }, {
            ipAddress: "127.0.0.1",
            queryDate: "2018-02-28T09:38:10.772Z",
            queryRecordId: "zzzzz",
            queryType: 2,
            timeConsuming: 200,
            userId: "d",
          }, {
            ipAddress: "127.0.0.1",
            queryDate: "2018-02-28T09:38:10.772Z",
            queryRecordId: "zzzzz",
            queryType: 2,
            timeConsuming: 200,
            userId: "e",
          },
        ],
        "merge-rule":{
          name:{
            '小白': {rowspan: 2},
            'v白': {rowspan: 0}
          }
        },
        filter: [{
          title: '姓名',
          dataIndex: 'userId',
          options: [{value: "a", label: "a"}, {value: "b", label: "b"}],
          value: [],
          // multiple,search,extra
        }]

      }
    },
    methods: {
      //导出样例
      exportTable(){
        /* 获取需要导出的表格DOM元素 */
        var wb = XLSX.utils.table_to_book(document.querySelector('#datatable'))
        /* 进行导出操作 */
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
        try {
          FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), '表格.xlsx')
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-table .n3-data-table-row-select, .my-table .n3-row-select {
    display: none;
  }
</style>
