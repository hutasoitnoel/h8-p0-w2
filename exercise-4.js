var tanggal = 29;
var bulan = 2;
var tahun = 2001;

switch(bulan){
  case 1:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Januari " + tahun)
                }
            }
        }
    } break;
  case 2:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=28:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Februari " + tahun)
                }
            }
        }
        switch(tanggal){
          case 29:
            switch(true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200:
                    switch(tahun%4){
                      case 0:
                        switch(true){
                          case tahun%100>0:
                            console.log(tanggal + " Februari " + tahun);
                          case tahun%100===0:
                            switch (tahun%400){
                              case 0: 
                                console.log(tanggal + " Februari " + tahun)
                            }
                        }
                    }
                }
            }
        }
    } break;
  case 3:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Maret " + tahun)
                }
            }
        }
    } break;
case 4:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=30:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " April " + tahun)
                }
            }
        }
    } break;
case 5:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Mei " + tahun)
                }
            }
        }
    } break;
case 6:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=30:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Juni " + tahun)
                }
            }
        }
    } break;
case 7:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Juli " + tahun)
                }
            }
        }
    } break;
case 8:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Agustus " + tahun)
                }
            }
        }
    } break;
case 9:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=30:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " September " + tahun)
                }
            }
        }
    } break;
case 10:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Oktober " + tahun)
                }
            }
        }
    } break;
case 11:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=30:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " November " + tahun)
                }
            }
        }
    } break;
case 12:
    switch(true){
      case 1<=tanggal:
        switch(true){
          case tanggal<=31:
            switch (true){
              case 1900<=tahun:
                switch(true){
                  case tahun<=2200: console.log(tanggal + " Desember " + tahun)
                }
            }
        }
    } break;
}
