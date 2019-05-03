TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "id": "panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 69.6,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 3536,
         "class": "ImageResourceLevel",
         "width": 3536,
         "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0.png"
        }
       ]
      },
      "inertia": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8, this.camera_73454C64_7DC9_7F68_41DE_62CDCA5B24FA); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_7510F699_783C_12CD_41B1_6204D08938CD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.99,
        "yaw": -7.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 192,
           "class": "ImageResourceLevel",
           "width": 192,
           "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.05
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -7.58,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 384,
           "class": "ImageResourceLevel",
           "width": 384,
           "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.05
       }
      ]
     }
    ]
   }
  ],
  "cardboardMenu": {
   "selectedFontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "class": "Menu",
   "label": "Media",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "id": "Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "class": "MenuItem",
     "label": "01",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "02",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "03",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "04",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "05",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "06",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "selectedBackgroundColor": "#202020"
  },
  "id": "panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587",
  "pitch": 0,
  "hfovMin": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3456,
          "class": "ImageResourceLevel",
          "width": 6912,
          "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "id": "panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_tcap0",
         "angle": 0,
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "hfov": 73.2,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 3536,
            "class": "ImageResourceLevel",
            "width": 3536,
            "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0.png"
           }
          ]
         },
         "inertia": false
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_7219A525_7834_17FA_4185_1DB67251FBC1, this.camera_7396BBFA_7DC9_7958_41A7_22BC276F3E69); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_743FA747_788A_9000_41B8_9209EE95A3A3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.5,
           "yaw": 1.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 58,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.43
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 1.65,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 116,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -24.43
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587, this.camera_73BB9C24_7DC9_7EE8_41CD_3AB3392967EC); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_77EFA0A5_788A_B001_41B8_ABA8FC93ACCD",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.35,
           "yaw": -173.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 138,
              "class": "ImageResourceLevel",
              "width": 138,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": 5.75
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Door"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -173.87,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 14.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 276,
              "class": "ImageResourceLevel",
              "width": 276,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_1_0.png"
             }
            ]
           },
           "pitch": 5.75
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_7212682C_7834_3DCA_41D8_410AB9DE006A, this.camera_73AC2C0F_7DC9_7EB8_41C1_213C07A10047); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "id": "overlay_7729A73C_788E_9007_41D2_45BF8934C6C7",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.13,
           "yaw": 98.04,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "class": "ImageResourceLevel",
              "width": 113,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -46.68
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 98.04,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 198,
              "class": "ImageResourceLevel",
              "width": 227,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -46.68
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.showWindow(this.window_6FE4B5E0_7CE6_36F5_41C0_B2993BBD6D92, null, false)"
          }
         ],
         "id": "overlay_6CE915C8_7CDA_1734_41C1_6007C96AB24F",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 27.53,
           "yaw": 28.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_3_1_0_map.gif"
             }
            ]
           },
           "pitch": -34.99
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Chairs"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 28.89,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 27.53,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 539,
              "class": "ImageResourceLevel",
              "width": 539,
              "url": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -34.99
          }
         ]
        }
       ]
      }
     ],
     "cardboardMenu": "this.Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
     "id": "panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8",
     "pitch": 0,
     "hfovMin": 120,
     "class": "Panorama",
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3456,
             "class": "ImageResourceLevel",
             "width": 6912,
             "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "id": "panorama_7219A525_7834_17FA_4185_1DB67251FBC1_tcap0",
            "angle": 0,
            "rotate": false,
            "class": "TripodCapPanoramaOverlay",
            "hfov": 73.2,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 3536,
               "class": "ImageResourceLevel",
               "width": 3536,
               "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0.png"
              }
             ]
            },
            "inertia": false
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_7218A34C_7834_124A_41D4_5C79345561BA, this.camera_73672CA5_7DC9_7FE8_41D6_D17ADD3B4614); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "id": "overlay_6885E1D1_7899_B000_41D1_1FB79BFD8AD1",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.75,
              "yaw": 79.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 67,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -35.28
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 79.45,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.75,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 134,
                 "class": "ImageResourceLevel",
                 "width": 135,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -35.28
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8, this.camera_737DCCBA_7DC9_7FD8_41C9_453C07D830D6); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_6816DC89_78B6_9001_41D0_A3316805C7FB",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.18,
              "yaw": 175.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -23.58
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 175.45,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 87,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -23.58
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_73A44E8F_7D10_29ED_41C9_AF28BD2297B1",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 32.74,
              "yaw": 84.66,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 94,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_2_0_map.gif"
                }
               ]
              },
              "pitch": 17.99
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Regus Photo Album"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 84.66,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 32.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 112,
                 "class": "ImageResourceLevel",
                 "width": 660,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 17.99
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "id": "overlay_72B27122_7D1F_D8D6_41CB_80B3A36D9110",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.68,
              "yaw": 83.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 84,
                 "class": "ImageResourceLevel",
                 "width": 84,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": 8.8
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 83.13,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.68,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 168,
                 "class": "ImageResourceLevel",
                 "width": 168,
                 "url": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_0_HS_4_0.png"
                }
               ]
              },
              "pitch": 8.8
             }
            ]
           }
          ]
         }
        ],
        "cardboardMenu": "this.Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
        "id": "panorama_7219A525_7834_17FA_4185_1DB67251FBC1",
        "pitch": 0,
        "hfovMin": 120,
        "class": "Panorama",
        "hfov": 360,
        "partial": false,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3456,
                "class": "ImageResourceLevel",
                "width": 6912,
                "url": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "id": "panorama_7218A34C_7834_124A_41D4_5C79345561BA_tcap0",
               "angle": 0,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "hfov": 73.2,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 3536,
                  "class": "ImageResourceLevel",
                  "width": 3536,
                  "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0.png"
                 }
                ]
               },
               "inertia": false
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_7219A525_7834_17FA_4185_1DB67251FBC1, this.camera_735CEC7A_7DC9_7F58_41CC_D80385952EAD); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "id": "overlay_69B281F0_788E_901F_41CB_E83BCD1A8415",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.1,
                 "yaw": -97.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -32.33
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -97.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116,
                    "url": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -32.33
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_721ACD86_7834_16C7_41AF_D89475290A77, this.camera_736ABC90_7DC9_7FA8_41D4_E226A8C7C495); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_6853AF97_788E_F002_41CB_8F5E5E615006",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.51,
                 "yaw": 172.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -24.12
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 172.65,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116,
                    "url": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -24.12
                }
               ]
              }
             ]
            }
           ],
           "cardboardMenu": "this.Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
           "id": "panorama_7218A34C_7834_124A_41D4_5C79345561BA",
           "pitch": 0,
           "hfovMin": 120,
           "class": "Panorama",
           "hfov": 360,
           "partial": false,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_7219A525_7834_17FA_4185_1DB67251FBC1",
             "yaw": -97.78,
             "distance": 1,
             "backwardYaw": 79.45
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3456,
                   "class": "ImageResourceLevel",
                   "width": 6912,
                   "url": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "id": "panorama_721ACD86_7834_16C7_41AF_D89475290A77_tcap0",
                  "angle": 0,
                  "rotate": false,
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 74.4,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 3536,
                     "class": "ImageResourceLevel",
                     "width": 3536,
                     "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0.png"
                    }
                   ]
                  },
                  "inertia": false
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_7218A34C_7834_124A_41D4_5C79345561BA, this.camera_73B15C39_7DC9_7ED8_41C9_B62A0EC87C23); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "id": "overlay_6966B323_788E_9002_41DD_1579CF53BBF7",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.5,
                    "yaw": -8.79,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 57,
                       "class": "ImageResourceLevel",
                       "width": 58,
                       "url": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -24.35
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -8.79,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 115,
                       "class": "ImageResourceLevel",
                       "width": 116,
                       "url": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -24.35
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_7212682C_7834_3DCA_41D8_410AB9DE006A, this.camera_734F4C4E_7DC9_7EB8_41DA_165B7C57A208); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_6A5C9D24_788E_7007_41B7_2E70F090285A",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.31,
                    "yaw": -102.91,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 135,
                       "url": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -43.11
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -102.91,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.31,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 235,
                       "class": "ImageResourceLevel",
                       "width": 271,
                       "url": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -43.11
                   }
                  ]
                 }
                ]
               }
              ],
              "cardboardMenu": "this.Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
              "id": "panorama_721ACD86_7834_16C7_41AF_D89475290A77",
              "pitch": 0,
              "hfovMin": 60,
              "class": "Panorama",
              "hfov": 360,
              "partial": false,
              "hfovMax": 120,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_7218A34C_7834_124A_41D4_5C79345561BA",
                "yaw": -8.79,
                "distance": 1,
                "backwardYaw": 172.65
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "vfov": 180,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3456,
                      "class": "ImageResourceLevel",
                      "width": 6912,
                      "url": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "id": "panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_tcap0",
                     "angle": 0,
                     "rotate": false,
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 69.6,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 3536,
                        "class": "ImageResourceLevel",
                        "width": 3536,
                        "url": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_tcap0.png"
                       }
                      ]
                     },
                     "inertia": false
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8, this.camera_730ABCCF_7DC9_7FB8_41C4_C2BB4F4B988D); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "id": "overlay_69445D3A_7889_9003_41CA_ABF6F7E99E6C",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.22,
                       "yaw": -103.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 57,
                          "class": "ImageResourceLevel",
                          "width": 57,
                          "url": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -45.2
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": -103.8,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.22,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 115,
                          "class": "ImageResourceLevel",
                          "width": 115,
                          "url": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -45.2
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_721ACD86_7834_16C7_41AF_D89475290A77, this.camera_73074CE4_7DC9_7F68_41B6_A17FE381F0F2); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "id": "overlay_6A7D1EA0_78F7_B03E_41D5_57C171996949",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.83,
                       "yaw": 75.18,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 57,
                          "class": "ImageResourceLevel",
                          "width": 58,
                          "url": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -50.66
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 75.18,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 3.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 115,
                          "class": "ImageResourceLevel",
                          "width": 116,
                          "url": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -50.66
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "video": {
                      "mp4Url": "media/video_70D295A6_7DC0_42B2_41D1_3AE595146D44.mp4",
                      "class": "VideoResource",
                      "width": 640,
                      "height": 360
                     },
                     "id": "overlay_7119D94A_7DC0_C3F3_41B5_2BE883E516FA",
                     "loop": false,
                     "rotationX": 0.12,
                     "roll": -1.8,
                     "vfov": 8.18,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 2,
                        "class": "ImageResourceLevel",
                        "width": 2,
                        "url": "media/overlay_7119D94A_7DC0_C3F3_41B5_2BE883E516FA_t.png"
                       }
                      ]
                     },
                     "pitch": -0.1,
                     "yaw": -9.8,
                     "rotationY": 3.5,
                     "class": "VideoPanoramaOverlay",
                     "hfov": 14.39,
                     "useHandCursor": false,
                     "autoplay": false,
                     "mouseEnter": "this.overlay_7119D94A_7DC0_C3F3_41B5_2BE883E516FA.play()"
                    }
                   ]
                  }
                 ],
                 "cardboardMenu": "this.Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
                 "id": "panorama_7212682C_7834_3DCA_41D8_410AB9DE006A",
                 "pitch": 0,
                 "hfovMin": 60,
                 "class": "Panorama",
                 "hfov": 360,
                 "partial": false,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8",
                   "yaw": -103.8,
                   "distance": 1,
                   "backwardYaw": 98.04
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_721ACD86_7834_16C7_41AF_D89475290A77",
                   "yaw": 75.18,
                   "distance": 1,
                   "backwardYaw": -102.91
                  }
                 ],
                 "label": "06",
                 "thumbnailUrl": "media/panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_t.jpg"
                },
                "yaw": -102.91,
                "distance": 1,
                "backwardYaw": 75.18
               }
              ],
              "label": "05",
              "thumbnailUrl": "media/panorama_721ACD86_7834_16C7_41AF_D89475290A77_t.jpg"
             },
             "yaw": 172.65,
             "distance": 1,
             "backwardYaw": -8.79
            }
           ],
           "label": "04",
           "thumbnailUrl": "media/panorama_7218A34C_7834_124A_41D4_5C79345561BA_t.jpg"
          },
          "yaw": 79.45,
          "distance": 1,
          "backwardYaw": -97.78
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8",
          "yaw": 175.45,
          "distance": 1,
          "backwardYaw": 1.65
         }
        ],
        "label": "03",
        "thumbnailUrl": "media/panorama_7219A525_7834_17FA_4185_1DB67251FBC1_t.jpg"
       },
       "yaw": 1.65,
       "distance": 1,
       "backwardYaw": 175.45
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_7212682C_7834_3DCA_41D8_410AB9DE006A",
       "yaw": 98.04,
       "distance": 1,
       "backwardYaw": -103.8
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587",
       "yaw": -173.87,
       "distance": 1,
       "backwardYaw": -7.58
      }
     ],
     "label": "02",
     "thumbnailUrl": "media/panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_t.jpg"
    },
    "yaw": -7.58,
    "distance": 1,
    "backwardYaw": -173.87
   }
  ],
  "label": "01",
  "thumbnailUrl": "media/panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_t.jpg"
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonCardboardView": "this.IconButton_70CD3DCC_7D84_E21C_41CC_2B2F73176321",
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -9.1,
   "pitch": -3.17
  }
 },
 "this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8",
 {
  "id": "panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.91,
   "pitch": -8.57
  }
 },
 "this.panorama_7219A525_7834_17FA_4185_1DB67251FBC1",
 {
  "id": "panorama_7219A525_7834_17FA_4185_1DB67251FBC1_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_72B09B03_7D87_E60B_41BE_1DEC715AAC2F"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_7218A34C_7834_124A_41D4_5C79345561BA",
 {
  "id": "panorama_7218A34C_7834_124A_41D4_5C79345561BA_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.54,
   "pitch": -6.89
  }
 },
 "this.panorama_721ACD86_7834_16C7_41AF_D89475290A77",
 {
  "id": "panorama_721ACD86_7834_16C7_41AF_D89475290A77_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_7212682C_7834_3DCA_41D8_410AB9DE006A",
 {
  "id": "panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album board-",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.28",
       "y": "0.40",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "board-room-example",
      "thumbnailUrl": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_0_t.jpg",
      "width": 550,
      "id": "album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_0",
      "height": 412,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_0.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.48",
       "y": "0.33",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "ext-building-example",
      "thumbnailUrl": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_1_t.jpg",
      "width": 550,
      "id": "album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_1",
      "height": 412,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_1.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.43",
       "y": "0.27",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "ext-office-example",
      "thumbnailUrl": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_2_t.jpg",
      "width": 550,
      "id": "album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_2",
      "height": 412,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_2.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.37",
       "y": "0.63",
       "zoomFactor": 1.1
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "reception-example",
      "thumbnailUrl": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_3_t.jpg",
      "width": 550,
      "id": "album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_3",
      "height": 412,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    }
   ]
  },
  "id": "album_77F03CF7_7D10_E93E_41CA_B9A0671980C5",
  "thumbnailUrl": "media/album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_t.png"
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_0",
 "this.album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_1",
 "this.album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_2",
 "this.album_77F03CF7_7D10_E93E_41CA_B9A0671980C5_3",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7241DDA7_7834_16C6_41D0_AF51A47F1587_camera",
    "end": "if(this.existsKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')){ if(this.getKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')) { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_6FCE0405_7D10_58D2_41C6_E62C1E6575BC, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_73078CE4_7DC9_7F68_4183_5FCEAE96664B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')",
    "begin": "this.registerKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A', this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_6FCE0405_7D10_58D2_41C6_E62C1E6575BC, 'showEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_72ECA4C0_7834_16BA_41C5_6F6DF8C6FAF8_camera",
    "end": "if(this.existsKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')){ if(this.getKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')) { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_7307FCE5_7DC9_7F68_41A4_3770F3ABA306, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_6E103F91_7D10_27F2_41D8_E38E7BE59E91, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')",
    "begin": "this.registerKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A', this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_6E103F91_7D10_27F2_41D8_E38E7BE59E91, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7219A525_7834_17FA_4185_1DB67251FBC1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7219A525_7834_17FA_4185_1DB67251FBC1_camera",
    "end": "if(this.existsKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')){ if(this.getKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')) { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_7307CCE5_7DC9_7F68_41D6_66128396A4B9, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_6E104F92_7D10_27F6_41DA_6F624EDF06E5, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')",
    "begin": "this.registerKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A', this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_6E104F92_7D10_27F6_41DA_6F624EDF06E5, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7218A34C_7834_124A_41D4_5C79345561BA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7218A34C_7834_124A_41D4_5C79345561BA_camera",
    "end": "if(this.existsKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')){ if(this.getKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')) { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_73066CE5_7DC9_7F68_41DA_630DD6B97BC8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_7680F01D_7D2F_85E4_41CA_5F6E7ECB5658, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')",
    "begin": "this.registerKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A', this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_7680F01D_7D2F_85E4_41CA_5F6E7ECB5658, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_721ACD86_7834_16C7_41AF_D89475290A77",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_721ACD86_7834_16C7_41AF_D89475290A77_camera",
    "end": "if(this.existsKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')){ if(this.getKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')) { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_73009CE6_7DC9_7F68_41CE_AABAABD90550, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_7680C01E_7D2F_85E4_41DA_8FA207C2DD2D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')",
    "begin": "this.registerKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A', this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_7680C01E_7D2F_85E4_41DA_8FA207C2DD2D, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7212682C_7834_3DCA_41D8_410AB9DE006A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7212682C_7834_3DCA_41D8_410AB9DE006A_camera",
    "end": "if(this.existsKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')){ if(this.getKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')) { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, true, -1, this.effect_7300CCE7_7DC9_7F68_41DB_599488CFDE8C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_7680801E_7D2F_85E4_41D6_825152AA32C5, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A')",
    "begin": "this.registerKey('visibility_HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A', this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A, false, -1, this.effect_7680801E_7D2F_85E4_41D6_825152AA32C5, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "media": "this.album_77F03CF7_7D10_E93E_41CA_B9A0671980C5",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_70D295A6_7DC0_42B2_41D1_3AE595146D44_t.jpg",
  "class": "Video",
  "label": "002",
  "video": {
   "mp4Url": "media/video_70D295A6_7DC0_42B2_41D1_3AE595146D44.mp4",
   "class": "VideoResource",
   "width": 640,
   "height": 360
  },
  "width": 640,
  "id": "video_70D295A6_7DC0_42B2_41D1_3AE595146D44",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "class": "PlayList",
  "id": "playList_73849BD9_7DC9_7958_41D6_271A9771379E",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_70D295A6_7DC0_42B2_41D1_3AE595146D44",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_73849BD9_7DC9_7958_41D6_271A9771379E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_73849BD9_7DC9_7958_41D6_271A9771379E, 0, this.video_70D295A6_7DC0_42B2_41D1_3AE595146D44)"
   }
  ]
 },
 "this.Menu_73994BDE_7DC9_7958_41C5_8D9C4A01D21A",
 {
  "titleFontColor": "#000000",
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "backgroundColor": [],
  "borderSize": 0,
  "titlePaddingTop": 5,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "backgroundColorRatios": [],
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "gap": 10,
  "closeButtonBorderColor": "#000000",
  "headerPaddingRight": 10,
  "bodyPaddingRight": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconWidth": 12,
  "modal": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "horizontalAlign": "center",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadow": true,
  "layout": "vertical",
  "closeButtonPaddingBottom": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "Business Class Chairs",
  "veilColorDirection": "horizontal",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "headerPaddingTop": 10,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "shadowVerticalLength": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "closeButtonPaddingLeft": 0,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "children": [
   {
    "borderSize": 0,
    "borderRadius": 0,
    "scrollBarColor": "#000000",
    "paddingRight": 10,
    "width": "100%",
    "paddingTop": 10,
    "paddingLeft": 10,
    "class": "HTMLText",
    "scrollBarWidth": 10,
    "height": "100%",
    "minHeight": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Regus gives you best in class business chairs for amzing comfort and right posture.</SPAN></DIV></div>",
    "minWidth": 0,
    "id": "htmlText_uid7387ABD3_7DC9_79A8_41D6_4E4D6812331F",
    "data": {
     "name": "HTMLText2243"
    },
    "backgroundOpacity": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver"
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "width": 300,
  "closeButtonBorderSize": 0,
  "height": 200,
  "bodyPaddingTop": 5,
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "creationPolicy": "delayed",
  "footerHeight": 5,
  "paddingLeft": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBackgroundOpacity": 1,
  "scrollBarWidth": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "minHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "id": "window_6FE4B5E0_7CE6_36F5_41C0_B2993BBD6D92",
  "backgroundOpacity": 1,
  "headerBorderSize": 0,
  "bodyBackgroundOpacity": 1,
  "data": {
   "name": "Window4467"
  },
  "titleFontSize": 14,
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonPaddingTop": 0,
  "titleFontWeight": "bold",
  "closeButtonPaddingRight": 0,
  "footerBackgroundOpacity": 1,
  "bodyPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 6,
  "veilColorRatios": [
   0,
   1
  ],
  "scrollBarVisible": "rollOver",
  "footerBorderSize": 0
 },
 {
  "id": "camera_7396BBFA_7DC9_7958_41A7_22BC276F3E69",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_73968BFA_7DC9_7958_41CB_41AB29505517"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.55,
   "pitch": 0
  }
 },
 {
  "id": "camera_73AC2C0F_7DC9_7EB8_41C1_213C07A10047",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.2,
   "pitch": 0
  }
 },
 {
  "id": "camera_73BB9C24_7DC9_7EE8_41CD_3AB3392967EC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 172.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_73B15C39_7DC9_7ED8_41C9_B62A0EC87C23",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.35,
   "pitch": 0
  }
 },
 {
  "id": "camera_734F4C4E_7DC9_7EB8_41DA_165B7C57A208",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.82,
   "pitch": 0
  }
 },
 {
  "id": "camera_73454C64_7DC9_7F68_41DE_62CDCA5B24FA",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.13,
   "pitch": 0
  }
 },
 {
  "id": "camera_735CEC7A_7DC9_7F58_41CC_D80385952EAD",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_735CFC7A_7DC9_7F58_418F_DAD9BC671D82"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.55,
   "pitch": 0
  }
 },
 {
  "id": "camera_736ABC90_7DC9_7FA8_41D4_E226A8C7C495",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.21,
   "pitch": 0
  }
 },
 {
  "id": "camera_73672CA5_7DC9_7FE8_41D6_D17ADD3B4614",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.22,
   "pitch": 0
  }
 },
 {
  "id": "camera_737DCCBA_7DC9_7FD8_41C9_453C07D830D6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.35,
   "pitch": 0
  }
 },
 {
  "id": "camera_730ABCCF_7DC9_7FB8_41C4_C2BB4F4B988D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.96,
   "pitch": 0
  }
 },
 {
  "id": "camera_73074CE4_7DC9_7F68_41B6_A17FE381F0F2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 77.09,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_6FCE0405_7D10_58D2_41C6_E62C1E6575BC",
  "duration": 1000
 },
 "this.effect_6FCE0405_7D10_58D2_41C6_E62C1E6575BC",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_73078CE4_7DC9_7F68_4183_5FCEAE96664B",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_6E103F91_7D10_27F2_41D8_E38E7BE59E91",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_7307FCE5_7DC9_7F68_41A4_3770F3ABA306",
  "duration": 1000
 },
 "this.effect_6E103F91_7D10_27F2_41D8_E38E7BE59E91",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_6E104F92_7D10_27F6_41DA_6F624EDF06E5",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_7307CCE5_7DC9_7F68_41D6_66128396A4B9",
  "duration": 1000
 },
 "this.effect_6E104F92_7D10_27F6_41DA_6F624EDF06E5",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_7680F01D_7D2F_85E4_41CA_5F6E7ECB5658",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_73066CE5_7DC9_7F68_41DA_630DD6B97BC8",
  "duration": 1000
 },
 "this.effect_7680F01D_7D2F_85E4_41CA_5F6E7ECB5658",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_7680C01E_7D2F_85E4_41DA_8FA207C2DD2D",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_73009CE6_7DC9_7F68_41CE_AABAABD90550",
  "duration": 1000
 },
 "this.effect_7680C01E_7D2F_85E4_41DA_8FA207C2DD2D",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_7680801E_7D2F_85E4_41D6_825152AA32C5",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_7300CCE7_7DC9_7F68_41DB_599488CFDE8C",
  "duration": 1000
 },
 "this.effect_7680801E_7D2F_85E4_41D6_825152AA32C5"
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontColor": "#606060",
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 15,
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarRight": 0,
  "minHeight": 50,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "minWidth": 100,
  "progressHeight": 10,
  "toolTipBorderRadius": 3,
  "id": "MainViewer",
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0,
  "borderSize": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 2,
  "paddingRight": 20,
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "backgroundColorRatios": [
   0
  ],
  "width": "33.091%",
  "paddingTop": 20,
  "shadowVerticalLength": 2,
  "paddingLeft": 20,
  "class": "HTMLText",
  "scrollBarWidth": 10,
  "height": "24.013%",
  "minHeight": 1,
  "shadow": true,
  "scrollBarMargin": 2,
  "top": "3.4%",
  "borderSize": 0,
  "shadowSpread": 1,
  "minWidth": 1,
  "id": "HTMLText_7088BD71_7CDB_F7D4_41C1_61D76AAFB46A",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>Regus</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Co-Working</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </SPAN></SPAN></DIV></div>",
  "shadowColor": "#000000",
  "backgroundOpacity": 0.91,
  "data": {
   "name": "HTMLText53815"
  },
  "paddingBottom": 10,
  "shadowBlurRadius": 7,
  "left": "2.26%",
  "borderRadius": 10,
  "shadowOpacity": 0.19,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 },
 {
  "maxWidth": 56,
  "iconURL": "skin/IconButton_70CD3DCC_7D84_E21C_41CC_2B2F73176321.png",
  "verticalAlign": "middle",
  "paddingRight": 0,
  "borderSize": 0,
  "mode": "push",
  "width": 56,
  "maxHeight": 56,
  "borderRadius": 0,
  "height": 56,
  "paddingTop": 0,
  "paddingLeft": 0,
  "class": "IconButton",
  "minHeight": 1,
  "shadow": false,
  "horizontalAlign": "center",
  "cursor": "hand",
  "minWidth": 1,
  "bottom": "2.62%",
  "id": "IconButton_70CD3DCC_7D84_E21C_41CC_2B2F73176321",
  "data": {
   "name": "IconButton14318"
  },
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "transparencyActive": false,
  "right": "1.09%"
 }
], 
 "borderSize": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "width": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "height": "100%",
 "minHeight": 20,
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "vrPolyfillScale": 0.5,
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "minWidth": 20,
 "id": "rootPlayer",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "data": {
  "name": "Player436"
 },
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})