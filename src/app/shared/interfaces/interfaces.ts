export const configTable: any = {
    title: {
        name: 'string',
        class: 'string',
    },
    dataConfig: [
        {
            key: 'string',
            title: 'string',
            pipe: {
                functionPipe: () => { },
                class: 'string'
            }
        }
    ],
    rowActions: {
        title: {
            name: 'string',
            class: 'string',
        },
        actions: [
            {
                name: 'string',
                icon: 'string',
                class: 'string',
                title: 'string',
            }
        ],
    },
    tableActions: [
        {
            name: 'string',
            icon: 'string',
            class: 'string',
            title: 'string',
        }
    ],
    noData: {
        name: 'string',
        class: 'string',
    },
    sort: 'boolean',
    filter: 'boolean',
};
export const CONFIGURACION_PRUEBA: any = {
    // title: {
    //     name: 'Tabla de Prueba',
    //     class: 'text-center',
    // },
    dataConfig: [
        {
            key: 'id',
            title: {
                name: 'Numero',
                class: 'text-center',
            },
            pipe: {
                // functionPipe: (data: string) => {
                //     return data + ' ' + data;
                // },
                // class: 'text-uppercase'
                class: '',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
                class: 'text-center',
            },
            pipe: {
                // functionPipe: (data: string) => {
                //     return data + ' ' + data;
                // },
                // class: 'text-uppercase'
                class: '',
            }
        },
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'editar',
                icon: 'fas fa-pencil-alt',
                class: 'p-2',
                title: 'Editar',
            },
            {
                name: 'metas',
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Ver Metas',
            }
        ],
    },
    tableActions: [
        {
            name: 'nuevo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Nuevo Lineamiento',
        }
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const DATOS_PRUEBA: any = [
    {
        id: 1,
        nombre: 'Jhoan',
        others: {
            label: 2,
            org: 'asdfasdfasdf'
        },
        arrayTest: [
            'dasdfasdfasdf',
            'asdfasdfasdfasdf',
            'asdfasdfasdfasdf'
        ]
    },
    {
        id: 2,
        nombre: 'Manuel',
        others: {
            label: 2,
            org: 'asdfasdfasdf'
        },
        arrayTest: [
            'dasdfasdfasdf',
            'asdfasdfasdfasdf',
            'asdfasdfasdfasdf'
        ]
    },
    {
        id: 3,
        nombre: 'Murillo',
        others: {
            label: 2,
            org: 'asdfasdfasdf'
        },
        arrayTest: [
            'dasdfasdfasdf',
            'asdfasdfasdfasdf',
            'asdfasdfasdfasdf'
        ]
    },
    {
        id: 4,
        nombre: 'Yara',
        others: {
            label: 2,
            org: 'asdfasdfasdf'
        },
        arrayTest: [
            'dasdfasdfasdf',
            'asdfasdfasdfasdf',
            'asdfasdfasdfasdf'
        ]
    },
];

export interface TreeNode<T> {
    data: T;
    children?: TreeNode<T>[];
    expanded?: boolean;
}

export interface FSEntry {
    name: string;
    size: string;
    kind: string;
    items?: number;
}

export const DATA_TREE_NODE: any = [
    {
        data: {
            name: 'Projects',
            size: '1.8 MB',
            items: 5,
            kind: 'dir'
        },
        children: [
            {
                data: {
                    name: 'project-1.doc',
                    kind: 'doc',
                    size: '240 KB'
                },
                children: [],
            },
            {
                data: {
                    name: 'project-2.doc',
                    kind: 'doc',
                    size: '290 KB'
                },
                children: [],
            },
            {
                data: {
                    name: 'project-3',
                    kind: 'dir',
                    size: '466 KB',
                    items: 3
                },
                children: [
                    {
                        data: {
                            name: 'project-3A.doc',
                            kind: 'doc',
                            size: '200 KB'
                        },
                        children: [],
                    },
                    {
                        data: {
                            name: 'project-3B.doc',
                            kind: 'doc',
                            size: '266 KB'
                        },
                        children: [],
                    },
                    {
                        data: {
                            name: 'project-3C.doc',
                            kind: 'doc',
                            size: '0'
                        },
                        children: [],
                    },
                ],
            },
            {
                data: {
                    name: 'project-4.docx',
                    kind: 'docx',
                    size: '900 KB'
                },
                children: [],
            },
        ],
    },
    {
        data: {
            name: 'Reports',
            kind: 'dir',
            size: '400 KB',
            items: 2
        },
        children: [
            {
                data: {
                    name: 'Report 1',
                    kind: 'dir',
                    size: '100 KB',
                    items: 1
                },
                children: [
                    {
                        data: {
                            name: 'report-1.doc',
                            kind: 'doc',
                            size: '100 KB'
                        },
                        children: [],
                    },
                ],
            },
            {
                data: {
                    name: 'Report 2',
                    kind: 'dir',
                    size: '300 KB',
                    items: 2
                },
                children: [
                    {
                        data: {
                            name: 'report-2.doc',
                            kind: 'doc',
                            size: '290 KB'
                        },
                        children: [],
                    },
                    {
                        data: {
                            name: 'report-2-note.txt',
                            kind: 'txt',
                            size: '10 KB'
                        },
                        children: [],
                    },
                ],
            },
        ],
    },
    // {
    //     data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //         { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //         { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    // },
];