import { Component, OnInit } from '@angular/core';
import { BoardServiceService } from './board-service.service';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boards: Array<Board>;
  errorMessage: string;

  constructor(private boardService: BoardServiceService) { }

  ngOnInit() {

  }

  show() {
    this.boardService.getBoards().subscribe(
      (boards) => {
        console.log(boards);
        this.boards = boards;
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );
  }


  del(board: Board) {
    this.boardService.removeBoard(board)
      .subscribe(boards => {
        // this.emps = emps
        console.log("removeEmp")
        // Json-Server는 응답 데이터가 없다.
        // 성공 콜백함수가 기동한다는 것은 처리가 정상이라는 의미이므로
        // 클라이언트에서 해당 데이터를 이미 알고 있고 바로 삭제하면 된다.
        var idx = this.boards.findIndex((e)=>e.id === board.id);
        this.boards.splice(idx, 1);
      }, error => this.errorMessage = <any>error);
    return false; // anchor 태그의 이벤트 전파를 막는다.
  }
}
