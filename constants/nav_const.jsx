export const navlinks = [
    {
      id: '1',
      link: 'WHO WE ARE', 
      path: '/aboutus',
      subcategory : true, 
      sublinks : [ 
        {
          id: '1',
          sublink: 'ABOUT US',
          subpath: '/aboutus', 
        }, 
        {
          id: '2',
          sublink: 'TEAM',
          subpath: '/team', 
        }, 
      ]
    },
    {
      id: '2',
      link: 'WHAT WE DO', 
      path: '/whatwedo',
      subcategory: true,
      sublinks : [
        {
          id: '1',
          sublink: 'WHAT WE DO',
          subpath: '/littlelibraryproject', 
        }, 
      ]
     
    },
    {
      id: '3',
      link: 'WHERE WE WORK', 
      path: '/cambodia' 
    },
    {
      id: '4',
      link: 'GET INVOLVED', 
      path: '/workwithus' 
    },
    {
      id: ' 5',
      link: 'DONATE NOW', 
      path: '/donate' 
    },

  ]