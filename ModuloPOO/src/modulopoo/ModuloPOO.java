/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modulopoo;

/**
 *
 * @author jonat
 */
import javax.swing.JOptionPane;
public class ModuloPOO {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
          //Introducimos la longitud del password
  
        String texto=JOptionPane.showInputDialog("Introduce la longitud del password");
        int longitud=Integer.parseInt(texto);
  
        Password contraseña;
        contraseña = new Password(longitud);
        
        if (contraseña.esFuerte()==true) {
            JOptionPane.showMessageDialog(null, "La contraseña "+contraseña.getContraseña()+" es FUERTE");
            
        }else{
            JOptionPane.showMessageDialog(null, "La contraseña "+contraseña.getContraseña()+" NO es FUERTE");
        }

    }
    
}
