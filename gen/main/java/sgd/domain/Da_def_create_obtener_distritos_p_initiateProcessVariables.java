package sgd.domain;

import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.List;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_obtener_distritos_p_initiateProcessVariables {

    @ProcessVariable(variableName = "distrito")
    private List<String> distrito;

    @ProcessVariable(variableName = "id_departamento")
    private Integer id_departamento;

    @ProcessVariable(variableName = "id_distrito")
    private List<Integer> id_distrito;

    @ProcessVariable(variableName = "id_provincia")
    private Integer id_provincia;

    public List<String> getDistrito(){
        return distrito;
    }

    public void setDistrito(List<String> distrito){
        this.distrito = distrito;
    }

    public Integer getId_departamento(){
        return id_departamento;
    }

    public void setId_departamento(Integer id_departamento){
        this.id_departamento = id_departamento;
    }

    public List<Integer> getId_distrito(){
        return id_distrito;
    }

    public void setId_distrito(List<Integer> id_distrito){
        this.id_distrito = id_distrito;
    }

    public Integer getId_provincia(){
        return id_provincia;
    }

    public void setId_provincia(Integer id_provincia){
        this.id_provincia = id_provincia;
    }

}