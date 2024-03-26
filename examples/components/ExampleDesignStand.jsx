import makeSchemaRenderer from './SchemaRender';
import IndexPageSchema from './Index';
import ErrorPageSchema from './Page/Error';
import FormPageSchema from './Page/Form';

import TableCrudSchema from './Stand/CRUD/Table';
import ButtonSchema from './Stand/Button';

export default {
  label: '设计规范',
  children: [
    {
      label: '1.3表格操作按钮',
      path: '/examples/stand/table-btn',
      component: makeSchemaRenderer(TableCrudSchema)
    },
    {
      label: '1.4表格注释',
      path: '/examples/stand/table-annotate',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: '1.5筛选样式',
      path: '/examples/stand/filter',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: '1.6详情页按钮',
      path: '/examples/stand/detail',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: '1.7表单填写页',
      children: [
        {
          label: '基本情况',
          path: '/examples/stand/form-basic',
          component: makeSchemaRenderer(IndexPageSchema)
        },
        {
          label: '多模块',
          path: '/examples/stand/form-multipart',
          component: makeSchemaRenderer(IndexPageSchema)
        },
        {
          label: '多行输入',
          path: '/examples/stand/form-multiline',
          component: makeSchemaRenderer(IndexPageSchema)
        },
        {
          label: '自定义表单',
          path: '/examples/stand/form-custom',
          component: makeSchemaRenderer(IndexPageSchema)
        }
      ]
    },
    {
      label: '表格多筛选项',
      path: '/examples/stand/table-multifilter',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: 'Steps步骤条',
      path: '/examples/stand/steps',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: '组织人员选择器',
      path: '/examples/stand/tree-picker',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: 'Statistic统计数值',
      path: '/examples/stand/stat-count',
      component: makeSchemaRenderer(IndexPageSchema)
    },
    {
      label: 'Button按钮',
      path: '/examples/stand/buttons',
      component: makeSchemaRenderer(ButtonSchema)
    }
    // {
    //   label: '页面',
    //   // icon: 'fa fa-square',
    //   badge: 3,
    //   badgeClassName: 'bg-info',
    //   children: [
    //     {
    //       label: '简单页面1',
    //       path: '/examples/stand/index',
    //       component: makeSchemaRenderer(IndexPageSchema)
    //     },
    //     {
    //       label: '初始化出错22',
    //       path: '/examples/stand/pages/error',
    //       component: makeSchemaRenderer(ErrorPageSchema)
    //     },
    //     {
    //       label: '表单页面3',
    //       path: '/examples/stand/pages/form',
    //       component: makeSchemaRenderer(FormPageSchema)
    //     }
    //   ]
    // }
  ]
};
