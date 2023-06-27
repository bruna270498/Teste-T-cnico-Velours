from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

# Configuração do driver do Selenium
driver = webdriver.Chrome('/usr/local/bin/chromedriver')

# Teste de edição de frontend e backend


def test_edit():
    # Navegar para a página de detalhes do produto
    driver.get('http://localhost:8000/detalhes/1')

    # Clicar no botão de editar
    edit_button = driver.find_element_by_xpath("//button[text()='Editar']")
    edit_button.click()

    # Preencher o formulário de edição
    name_input = driver.find_element_by_id('name')
    name_input.clear()
    name_input.send_keys('Tv tela Plana')

    price_input = driver.find_element_by_id('price')
    price_input.clear()
    price_input.send_keys('3000')

    tipo_input = driver.find_element_by_id('tipo')
    tipo_input.clear()
    tipo_input.send_keys('Eletronico')

    description_input = driver.find_element_by_id('description')
    description_input.clear()
    description_input.send_keys('Tem 52 polegadas fullHD')

    # Enviar o formulário de atualização
    update_button = driver.find_element_by_xpath(
        "//button[text()='Atualizar']")
    update_button.click()

    # Verificar se a mensagem de sucesso é exibida
    success_message = WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located(
            (By.XPATH, "//p[text()='Produto atualizado com sucesso!']"))
    )
    assert success_message.is_displayed()

    # Fazer uma requisição GET para obter os detalhes do produto atualizado
    # e verificar se os dados estão corretos
    # Exemplo usando a biblioteca requests:
    import requests

    response = requests.get('http://localhost:3000/produtos/1')
    data = response.json()

    assert data['name'] == 'Tv tela Plana'
    assert data['price'] == 3000
    assert data['tipo'] == 'Eletronico'
    assert data['description'] == 'Tem 52 polegadas fullHD'


# Teste de exclusão de frontend e backend
def test_delete():
    # Navegar para a página de detalhes do produto
    driver.get('http://localhost:8000/detalhes/1')

    # Clicar no botão de exclusão
    delete_button = driver.find_element_by_xpath("//button[text()='Excluir']")
    delete_button.click()

    # Confirmar a exclusão no pop-up de confirmação
    confirm_button = driver.switch_to.alert
    confirm_button.accept()

    # Verificar se a mensagem de sucesso é exibida
    success_message = WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located(
            (By.XPATH, "//p[text()='Produto excluído com sucesso!']"))
    )
    assert success_message.is_displayed()

    # Fazer uma requisição GET para verificar se o produto foi excluído
    # Exemplo usando a biblioteca requests:
    import requests

    response = requests.get('http://localhost:3000/produtos/1')

    assert response.status_code == 404


# Executar os testes
test_edit()
test_delete()

# Fechar o navegador
driver.quit()
