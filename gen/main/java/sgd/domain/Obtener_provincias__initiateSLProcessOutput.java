package sgd.domain;

import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.framework.domain.LinkSource;
import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(superType = "", type = "dm_workflow")
@Linked(template = "/application/processes/sgd_obtener_provincias__initiate")
@JsonPropertyOrder(alphabetic = true)
public class Obtener_provincias__initiateSLProcessOutput {

    @ProcessVariable(variableName = "id_provincia")
    private Integer id_provincia;

    @ProcessVariable(variableName = "provincia")
    private String provincia;

    public Integer getId_provincia(){
        return id_provincia;
    }

    public void setId_provincia(Integer id_provincia){
        this.id_provincia = id_provincia;
    }

    public String getProvincia(){
        return provincia;
    }

    public void setProvincia(String provincia){
        this.provincia = provincia;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}