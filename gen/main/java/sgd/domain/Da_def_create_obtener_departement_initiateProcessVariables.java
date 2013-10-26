package sgd.domain;

import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.List;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_obtener_departement_initiateProcessVariables {

    @ProcessVariable(variableName = "departamento")
    private List<String> departamento;

    @ProcessVariable(variableName = "id_departamento")
    private List<Integer> id_departamento;

    public List<String> getDepartamento(){
        return departamento;
    }

    public void setDepartamento(List<String> departamento){
        this.departamento = departamento;
    }

    public List<Integer> getId_departamento(){
        return id_departamento;
    }

    public void setId_departamento(List<Integer> id_departamento){
        this.id_departamento = id_departamento;
    }

}