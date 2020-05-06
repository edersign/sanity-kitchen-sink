export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb339b9d72de0f4ea9a8233',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vvxqgwe7',
                  apiId: 'bae95fe5-02d5-4ac7-be60-16dee537f6ef'
                },
                {
                  buildHookId: '5eb339b98ce54ee74bd2c171',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k48svhu6',
                  apiId: 'fb12dd43-3e9e-49d9-8636-75870eba5af3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edersign/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k48svhu6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
