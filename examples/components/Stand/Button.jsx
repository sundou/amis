export default {
  type: 'page',
  title: '按钮示例',
  body: [
    {
      type: 'button-toolbar',
      label: '按钮',
      buttons: [
        {
          type: 'action',
          label: '默认'
        },
        {
          type: 'action',
          label: '信息',
          level: 'info'
        },
        {
          type: 'action',
          label: '主要',
          level: 'primary'
        },
        {
          type: 'action',
          label: '次要',
          level: 'secondary'
        },
        {
          type: 'action',
          label: '成功',
          level: 'success'
        },
        {
          type: 'action',
          label: '警告',
          level: 'warning'
        },
        {
          type: 'action',
          label: '危险',
          level: 'danger'
        },
        {
          type: 'action',
          label: '浅色',
          level: 'light'
        },
        {
          type: 'action',
          label: '深色',
          level: 'dark'
        },
        {
          type: 'action',
          label: '链接',
          level: 'link'
        }
      ]
    }
  ]
};
