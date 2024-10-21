import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
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
import {HttpClientModule} from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesComponent,
    PipesComponent,
    TasksComponent,
    FlipkartComponent,
    HigherOrderComponent,
    AmazonComponent,
    EmployeeComponent,
    VehicleComponent,
    BankComponent,
    FlipkartApiComponent,
    MailComponent,
    CreateVehicleComponent,
    StudentsComponent,
    StudentCardComponent,
    CreateUserComponent,
    CreateStudentComponent,
    VehicleDetailsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
