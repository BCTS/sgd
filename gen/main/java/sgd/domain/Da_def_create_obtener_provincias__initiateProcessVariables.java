package sgd.domain;

import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.List;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_obtener_provincias__initiateProcessVariables {

    @ProcessVariable(variableName = "id_departamento")
    private Integer id_departamento;

    @ProcessVariable(variableName = "id_provincia")
    private List<Integer> id_provincia;

    @ProcessVariable(variableName = "provincia")
    private List<String> provincia;

    public Integer getId_departamento(){
        return id_departamento;
    }

    public void setId_departamento(Integer id_departamento){
        this.id_departamento = id_departamento;
    }

    public List<Integer> getId_provincia(){
        return id_provincia;
    }

    public void setId_provincia(List<Integer> id_provincia){
        this.id_provincia = id_provincia;
    }

    public List<String> getProvincia(){
        return provincia;
    }

    public void setProvincia(List<String> provincia){
        this.provincia = provincia;
    }

}