import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }


  public showSuccess(titulo: string, menssagem: string): void {
    this.toastr.success(menssagem, titulo);
  }

  public showError(titulo: string, menssagem: string): void {
    this.toastr.error(menssagem, titulo);
  }


  public async dialog(): Promise<boolean> {
    let isConfim: boolean = false;
    const result = await Swal.fire({
      title: "Deseja excluir esse produto ?",
      showCancelButton: true,
      confirmButtonText: "Sim",
    });

    if (result.isConfirmed) {
      isConfim = true;
    }

    return isConfim;
  }
}
