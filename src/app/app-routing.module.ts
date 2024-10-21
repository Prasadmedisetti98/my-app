import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CircleComponent } from './circle/circle.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AmazonComponent } from './amazon/amazon.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'databinding',component:DatabindingComponent},
      {path:'calculator',component:CalculatorComponent},
      {path:'circle',component:CircleComponent},
      {path:'rectangle',component:RectangleComponent},
      {path:'bmi',component:BmiComponent},
      {path:'dice',component:DiceComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'pipes',component:PipesComponent},
      {path:'tasks',component:TasksComponent},
      {path:'flipkart',component:FlipkartComponent},
      {path:'higher-order',component:HigherOrderComponent},
      {path:'amazon',component:AmazonComponent},
      {path:'employee',component:EmployeeComponent},
      {path:'vehicle',component:VehicleComponent},
      {path:'bank',component:BankComponent},
      {path:'flipkart-api',component:FlipkartApiComponent},
      {path:'mail',component:MailComponent},
      {path:'create-vehicle',component:CreateVehicleComponent},
      {path:'students',component:StudentsComponent},
      {path:'students-card',component:StudentCardComponent},
      {path:'create-user',component:CreateUserComponent},
      {path:'create-student',component:CreateStudentComponent},
      {path:'vehicle-details/:id',component:VehicleDetailsComponent}

    ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
