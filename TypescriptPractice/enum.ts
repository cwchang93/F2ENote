// enum Response {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: Response): void {
//     console.log('message',message);
// }

// respond("Princess Caroline", Response.Yes)
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// }

// function getMedia(mediaName: string): PrintMedia {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         return PrintMedia.Magazine;
//     }
//  }

// let mediaType: PrintMedia = getMedia('Forbes');
// console.log('mdType', mediaType);
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  console.log(PrintMedia)
enum alert_list {
    Login = '登入成功',
    Logout = '登出成功',
    Login_fail = '登入失敗',
}
console.log(alert_list);