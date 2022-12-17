import java.util.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Random;

public class DateClass {

    public static  Calendar[] Dates = new Calendar[10];
    public  Calendar calendar = new GregorianCalendar();
    public  Calendar CompareCalendar = new GregorianCalendar();
    public  Date CurrentDate = new Date();
    public  Random random = new Random();

    public DateClass(){

        this.calendar.setTime(this.CurrentDate);
        this.CompareCalendar.setTime(this.CurrentDate);

        int Previous = 0; 
        int Later = 0;
        
        System.out.println("Fechas");
        for(int i = 0; i < this.Dates.length; i++){
            int year = this.calendar.get(Calendar.YEAR);
            int month = this.calendar.get(Calendar.MONTH);
            int day = this.random.nextInt(30);
            this.calendar.set(year, month, day);
            this.Dates[i] = this.calendar;
            // Los meses va de 0 a 11
            System.out.println(this.Dates[i].get(Calendar.DATE) + "/" + this.Dates[i].get(Calendar.MONTH) + "/" + this.Dates[i].get(Calendar.YEAR));

            if(this.CompareCalendar.after(this.Dates[i])){
                Previous++;
            }else if(this.CompareCalendar.before(this.Dates[i])){
                Later++;
            }
        } 
        System.out.println("Desde el constructor");
        System.out.println("Fechas Previas: " + Previous);
        System.out.println("Fechas Posteriores: " + Later);
    }

    public void DatesFilter(){

        int Previous = 0; 
        int Later = 0; 
        
        for(int i = 0; i < Dates.length; i++){

            if(this.CompareCalendar.after(this.Dates[i])){
                Previous++;
            }else if(this.CompareCalendar.before(this.Dates[i])){
                Later++;
            }
        }
        System.out.println("Desde el Método Filtro");
        System.out.println("Fechas Previas: " + Previous);
        System.out.println("Fechas Posteriores: " + Later);
    }

    public static void main (String [] args) {

            // Los meses van de 0 a 11
            DateClass Date = new DateClass();
            Date.DatesFilter();
    }

}
            